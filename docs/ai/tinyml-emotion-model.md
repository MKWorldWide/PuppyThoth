# 🧠 PuppyThoth Alpha - TinyML Emotion-Intent Model Architecture

## 🎯 Model Overview
**PuppyThoth EmotionNet** - Lightweight neural network for real-time canine emotion and intent classification, optimized for edge deployment on ESP32 microcontrollers.

## 🏗️ Model Architecture

### 📊 Input Pipeline

```python
# Input Data Processing Pipeline
class PuppyThothInputProcessor:
    def __init__(self):
        self.audio_sample_rate = 16000  # Hz
        self.audio_window_size = 1024   # samples (64ms)
        self.accelerometer_sample_rate = 100  # Hz
        self.heart_rate_sample_rate = 1  # Hz
        
    def process_audio(self, raw_audio):
        """Convert raw audio to mel-spectrogram features"""
        # Apply pre-emphasis filter
        emphasized_audio = self.apply_preemphasis(raw_audio)
        
        # Convert to mel-spectrogram
        mel_spec = librosa.feature.melspectrogram(
            y=emphasized_audio,
            sr=self.audio_sample_rate,
            n_mels=64,
            n_fft=1024,
            hop_length=512
        )
        
        # Convert to log scale
        log_mel_spec = librosa.power_to_db(mel_spec, ref=np.max)
        
        return log_mel_spec
    
    def process_sensor_data(self, accel_data, heart_rate, temp):
        """Fuse sensor data into feature vector"""
        # Extract accelerometer features
        accel_features = self.extract_accel_features(accel_data)
        
        # Normalize sensor data
        normalized_hr = (heart_rate - 60) / 100  # Normalize to 0-1
        normalized_temp = (temp - 37.0) / 5.0    # Normalize around 37°C
        
        return np.concatenate([accel_features, [normalized_hr, normalized_temp]])
```

### 🧠 Neural Network Architecture

```python
# TensorFlow Lite Model Architecture
class PuppyThothEmotionNet(tf.keras.Model):
    def __init__(self, num_emotions=5, num_intents=8):
        super().__init__()
        
        # Audio Processing Branch
        self.audio_conv1 = tf.keras.layers.Conv2D(16, (3, 3), activation='relu')
        self.audio_conv2 = tf.keras.layers.Conv2D(32, (3, 3), activation='relu')
        self.audio_conv3 = tf.keras.layers.Conv2D(64, (3, 3), activation='relu')
        self.audio_pool = tf.keras.layers.GlobalAveragePooling2D()
        self.audio_dropout = tf.keras.layers.Dropout(0.3)
        
        # Sensor Fusion Branch
        self.sensor_dense1 = tf.keras.layers.Dense(32, activation='relu')
        self.sensor_dense2 = tf.keras.layers.Dense(16, activation='relu')
        self.sensor_dropout = tf.keras.layers.Dropout(0.2)
        
        # Fusion Layer
        self.fusion_dense = tf.keras.layers.Dense(64, activation='relu')
        self.fusion_dropout = tf.keras.layers.Dropout(0.4)
        
        # Output Heads
        self.emotion_head = tf.keras.layers.Dense(num_emotions, activation='softmax')
        self.intent_head = tf.keras.layers.Dense(num_intents, activation='softmax')
        
    def call(self, inputs, training=False):
        audio_input, sensor_input = inputs
        
        # Audio processing
        x_audio = self.audio_conv1(audio_input)
        x_audio = self.audio_conv2(x_audio)
        x_audio = self.audio_conv3(x_audio)
        x_audio = self.audio_pool(x_audio)
        x_audio = self.audio_dropout(x_audio, training=training)
        
        # Sensor processing
        x_sensor = self.sensor_dense1(sensor_input)
        x_sensor = self.sensor_dense2(x_sensor)
        x_sensor = self.sensor_dropout(x_sensor, training=training)
        
        # Feature fusion
        x_fused = tf.concat([x_audio, x_sensor], axis=-1)
        x_fused = self.fusion_dense(x_fused)
        x_fused = self.fusion_dropout(x_fused, training=training)
        
        # Output predictions
        emotion_output = self.emotion_head(x_fused)
        intent_output = self.intent_head(x_fused)
        
        return emotion_output, intent_output
```

## 🎭 Emotion & Intent Categories

### 😊 Emotion Categories (5 classes)
```python
EMOTION_CLASSES = {
    0: "JOY",           # Happy, excited, playful
    1: "CALM",          # Relaxed, content, peaceful
    2: "ANXIETY",       # Nervous, worried, stressed
    3: "ALERT",         # Attentive, focused, watchful
    4: "EXCITEMENT"     # Energetic, enthusiastic, eager
}
```

### 🎯 Intent Categories (8 classes)
```python
INTENT_CLASSES = {
    0: "ATTENTION_SEEK",    # Wants owner's attention
    1: "PLAY_REQUEST",      # Wants to play
    2: "FOOD_REQUEST",      # Hungry or wants treats
    3: "POTTY_NEED",        # Needs to go outside
    4: "DANGER_ALERT",      # Perceives threat or danger
    5: "COMFORT_NEED",      # Needs comfort or reassurance
    6: "EXERCISE_NEED",     # Needs physical activity
    7: "REST_NEED"          # Tired or wants to rest
}
```

## 🏋️ Training Pipeline

### 📚 Data Collection Strategy

```python
# Data Collection Framework
class PuppyThothDataCollector:
    def __init__(self):
        self.recording_duration = 5  # seconds per sample
        self.samples_per_session = 20
        self.required_samples_per_class = 1000
        
    def collect_training_data(self, dog_id, emotion_label, intent_label):
        """Collect synchronized audio and sensor data"""
        # Start recording
        audio_data = self.record_audio()
        sensor_data = self.record_sensors()
        
        # Synchronize timestamps
        synchronized_data = self.synchronize_data(audio_data, sensor_data)
        
        # Save with labels
        self.save_sample(dog_id, synchronized_data, emotion_label, intent_label)
        
    def augment_data(self, audio_data, sensor_data):
        """Apply data augmentation techniques"""
        # Audio augmentation
        augmented_audio = self.apply_audio_augmentation(audio_data)
        
        # Sensor augmentation
        augmented_sensors = self.apply_sensor_augmentation(sensor_data)
        
        return augmented_audio, augmented_sensors
```

### 🎯 Training Configuration

```python
# Training Configuration
TRAINING_CONFIG = {
    # Model Parameters
    'input_shape': (64, 32, 1),  # mel-spectrogram dimensions
    'sensor_features': 12,       # accelerometer + heart rate + temp
    
    # Training Parameters
    'batch_size': 32,
    'learning_rate': 0.001,
    'epochs': 100,
    'validation_split': 0.2,
    
    # Loss Functions
    'emotion_loss': 'categorical_crossentropy',
    'intent_loss': 'categorical_crossentropy',
    'loss_weights': {'emotion': 0.6, 'intent': 0.4},
    
    # Regularization
    'l2_reg': 0.01,
    'dropout_rate': 0.3,
    
    # Data Augmentation
    'audio_noise_factor': 0.1,
    'time_shift_range': 0.1,
    'pitch_shift_range': 2.0
}
```

## 🔧 Model Optimization for Edge Deployment

### 📦 TensorFlow Lite Conversion

```python
# Model Conversion Pipeline
class PuppyThothModelConverter:
    def __init__(self):
        self.target_size_kb = 100  # Target model size
        self.inference_time_ms = 50  # Target inference time
        
    def convert_to_tflite(self, keras_model):
        """Convert Keras model to TensorFlow Lite"""
        # Create TFLite converter
        converter = tf.lite.TFLiteConverter.from_keras_model(keras_model)
        
        # Optimization settings
        converter.optimizations = [tf.lite.Optimize.DEFAULT]
        converter.target_spec.supported_types = [tf.float16]
        
        # Quantization
        converter.representative_dataset = self.representative_dataset_gen
        
        # Convert model
        tflite_model = converter.convert()
        
        return tflite_model
    
    def optimize_for_esp32(self, tflite_model):
        """Apply ESP32-specific optimizations"""
        # Model size optimization
        optimized_model = self.compress_model(tflite_model)
        
        # Memory optimization
        optimized_model = self.optimize_memory_usage(optimized_model)
        
        return optimized_model
```

### ⚡ ESP32 Deployment Code

```cpp
// ESP32 TensorFlow Lite Integration
#include "tensorflow/lite/micro/all_ops_resolver.h"
#include "tensorflow/lite/micro/micro_error_reporter.h"
#include "tensorflow/lite/micro/micro_interpreter.h"
#include "tensorflow/lite/schema/schema_generated.h"

class PuppyThothInferenceEngine {
private:
    tflite::MicroErrorReporter micro_error_reporter_;
    tflite::ErrorReporter* error_reporter_;
    const tflite::Model* model_;
    tflite::MicroInterpreter* interpreter_;
    
    // Tensor buffers
    TfLiteTensor* input_audio_;
    TfLiteTensor* input_sensor_;
    TfLiteTensor* output_emotion_;
    TfLiteTensor* output_intent_;
    
    // Memory for tensors
    uint8_t tensor_arena_[100 * 1024];  // 100KB arena
    
public:
    bool initialize() {
        // Set up error reporting
        error_reporter_ = &micro_error_reporter_;
        
        // Load model
        model_ = tflite::GetModel(puppy_thoth_model_tflite);
        
        // Set up interpreter
        static tflite::AllOpsResolver resolver;
        static tflite::MicroInterpreter static_interpreter(
            model_, resolver, tensor_arena_, sizeof(tensor_arena_), error_reporter_);
        interpreter_ = &static_interpreter;
        
        // Allocate tensors
        TfLiteStatus allocate_status = interpreter_->AllocateTensors();
        if (allocate_status != kTfLiteOk) {
            return false;
        }
        
        // Get input/output tensors
        input_audio_ = interpreter_->input(0);
        input_sensor_ = interpreter_->input(1);
        output_emotion_ = interpreter_->output(0);
        output_intent_ = interpreter_->output(1);
        
        return true;
    }
    
    InferenceResult run_inference(const AudioFeatures& audio, const SensorData& sensors) {
        // Prepare input data
        prepare_audio_input(audio);
        prepare_sensor_input(sensors);
        
        // Run inference
        TfLiteStatus invoke_status = interpreter_->Invoke();
        if (invoke_status != kTfLiteOk) {
            return InferenceResult::error();
        }
        
        // Process outputs
        EmotionPrediction emotion = process_emotion_output();
        IntentPrediction intent = process_intent_output();
        
        return InferenceResult(emotion, intent);
    }
};
```

## 📊 Model Performance Metrics

### 🎯 Accuracy Targets
```python
PERFORMANCE_TARGETS = {
    # Emotion Classification
    'emotion_accuracy': 0.85,      # 85% accuracy
    'emotion_f1_score': 0.82,      # 82% F1-score
    
    # Intent Classification
    'intent_accuracy': 0.80,       # 80% accuracy
    'intent_f1_score': 0.78,       # 78% F1-score
    
    # Edge Performance
    'model_size_kb': 100,          # <100KB model size
    'inference_time_ms': 50,       # <50ms inference time
    'memory_usage_kb': 200,        # <200KB RAM usage
    'power_consumption_mw': 150    # <150mW during inference
}
```

### 📈 Evaluation Metrics

```python
# Model Evaluation Framework
class PuppyThothEvaluator:
    def evaluate_model(self, model, test_dataset):
        """Comprehensive model evaluation"""
        results = {}
        
        # Accuracy metrics
        results['emotion_accuracy'] = self.calculate_emotion_accuracy(model, test_dataset)
        results['intent_accuracy'] = self.calculate_intent_accuracy(model, test_dataset)
        
        # F1 scores
        results['emotion_f1'] = self.calculate_emotion_f1(model, test_dataset)
        results['intent_f1'] = self.calculate_intent_f1(model, test_dataset)
        
        # Confusion matrices
        results['emotion_confusion'] = self.get_emotion_confusion_matrix(model, test_dataset)
        results['intent_confusion'] = self.get_intent_confusion_matrix(model, test_dataset)
        
        # Edge performance
        results['model_size'] = self.get_model_size(model)
        results['inference_time'] = self.measure_inference_time(model)
        results['memory_usage'] = self.measure_memory_usage(model)
        
        return results
```

## 🔄 Continuous Learning Pipeline

### 📚 Online Learning Framework

```python
# Continuous Learning System
class PuppyThothContinuousLearner:
    def __init__(self):
        self.feedback_buffer = []
        self.learning_rate = 0.0001
        self.batch_size = 16
        
    def collect_feedback(self, prediction, actual_emotion, actual_intent, user_correction):
        """Collect user feedback for model improvement"""
        feedback_sample = {
            'audio_features': prediction.audio_features,
            'sensor_features': prediction.sensor_features,
            'predicted_emotion': prediction.emotion,
            'predicted_intent': prediction.intent,
            'actual_emotion': actual_emotion,
            'actual_intent': actual_intent,
            'user_correction': user_correction,
            'timestamp': time.time()
        }
        
        self.feedback_buffer.append(feedback_sample)
        
    def update_model(self):
        """Update model with collected feedback"""
        if len(self.feedback_buffer) >= self.batch_size:
            # Prepare training batch
            training_batch = self.prepare_training_batch()
            
            # Fine-tune model
            self.fine_tune_model(training_batch)
            
            # Clear buffer
            self.feedback_buffer = []
```

## 🔧 Deployment Checklist

### ✅ Pre-deployment Validation
- [ ] Model accuracy meets performance targets
- [ ] Model size < 100KB
- [ ] Inference time < 50ms
- [ ] Memory usage < 200KB
- [ ] Power consumption < 150mW
- [ ] All emotion/intent classes represented in training data
- [ ] Data augmentation applied
- [ ] Cross-validation performed

### ✅ Edge Deployment Validation
- [ ] TensorFlow Lite model loads successfully on ESP32
- [ ] Real-time inference performance validated
- [ ] Memory usage within limits
- [ ] Power consumption measured
- [ ] Error handling implemented
- [ ] Fallback mechanisms in place

---
*Last Updated: Alpha Development Phase*
*Next: Codebase Structure for PuppyThoth Alpha* 