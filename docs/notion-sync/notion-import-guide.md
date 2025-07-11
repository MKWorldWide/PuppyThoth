# 📋 Notion Import Guide - PuppyThoth Alpha

## 🎯 Quick Import Instructions

**Copy and paste the sections below directly into your Notion workspace at:**
https://www.notion.so/PuppyThoth-Alpha-22dc06dba88d803aa98af977e50e8118

---

## 🔋 HARDWARE COMPONENT SOURCING

### 📊 Bill of Materials (BOM) - Alpha Unit

**Total Cost: $276.85**

#### Power System Components
| Component | Part Number | Vendor | Unit Price | Quantity | Total | Notes |
|-----------|-------------|--------|------------|----------|-------|-------|
| **Piezoelectric Energy Harvester** | Mide Volture V25W | Mide Technology | $45.00 | 1 | $45.00 | 25W output, flexible mounting |
| **Flexible Solar Film** | PowerFilm F15-1200 | PowerFilm Solar | $28.50 | 1 | $28.50 | 15W, 1200mA output |
| **Supercapacitor** | Maxwell BCAP0350 | Maxwell Technologies | $12.75 | 2 | $25.50 | 350F, 2.7V each |
| **Backup Li-Ion Battery** | Tenergy 3.7V 300mAh | Tenergy | $8.95 | 1 | $8.95 | Compact form factor |
| **Power Management IC** | TI BQ25570 | Texas Instruments | $3.25 | 1 | $3.25 | Energy harvesting PMIC |
| **Voltage Regulator** | LM317T | STMicroelectronics | $1.15 | 1 | $1.15 | 3.3V output regulation |
| **Power System Subtotal** | | | | | **$112.35** | |

#### Input Sensors
| Component | Part Number | Vendor | Unit Price | Quantity | Total | Notes |
|-----------|-------------|--------|------------|----------|-------|-------|
| **MEMS Microphone Array** | Knowles SPH0645LM4H-B | Knowles | $18.50 | 2 | $37.00 | Low-power digital mic array |
| **Accelerometer + Gyro** | Bosch BHI260AP | Bosch Sensortec | $15.75 | 1 | $15.75 | Smart sensor with AI capabilities |
| **Heart Rate Sensor** | Maxim MAX30102 | Maxim Integrated | $12.40 | 1 | $12.40 | PPG + SpO2 monitoring |
| **Temperature Sensor** | TI TMP117 | Texas Instruments | $4.85 | 1 | $4.85 | High-precision ±0.1°C |
| **Proximity Sensor** | ST VL53L1X | STMicroelectronics | $8.90 | 1 | $8.90 | Time-of-Flight sensor |
| **Sensors Subtotal** | | | | | **$78.90** | |

#### Output Systems
| Component | Part Number | Vendor | Unit Price | Quantity | Total | Notes |
|-----------|-------------|--------|------------|----------|-------|-------|
| **Micro Speaker** | Adafruit Mini Metal Speaker | Adafruit | $3.95 | 1 | $3.95 | 8Ω, 0.5W output |
| **Bone Conduction Transducer** | Vesper VM1000 | Vesper | $22.50 | 1 | $22.50 | High-efficiency bone conduction |
| **RGB LED Ring** | WS2812B Addressable Strip | WorldSemi | $6.75 | 1 | $6.75 | 12 LEDs, individually addressable |
| **Haptic Feedback Motor** | Precision ERM 3V | Precision Microdrives | $4.25 | 1 | $4.25 | Vibration motor for alerts |
| **Output Systems Subtotal** | | | | | **$37.45** | |

#### Processing & Communication
| Component | Part Number | Vendor | Unit Price | Quantity | Total | Notes |
|-----------|-------------|--------|------------|----------|-------|-------|
| **Microcontroller** | ESP32-WROOM-32 | Espressif | $8.50 | 1 | $8.50 | Dual-core, WiFi + BLE |
| **Flash Memory** | Winbond W25Q128 | Winbond | $2.15 | 1 | $2.15 | 128Mbit SPI flash |
| **Bluetooth Module** | nRF52840 | Nordic Semiconductor | $6.75 | 1 | $6.75 | BLE 5.0 + Thread |
| **Processing Subtotal** | | | | | **$17.40** | |

#### Mechanical & Enclosure
| Component | Part Number | Vendor | Unit Price | Quantity | Total | Notes |
|-----------|-------------|--------|------------|----------|-------|-------|
| **Waterproof Enclosure** | Custom 3D Printed | Local Fabrication | $15.00 | 1 | $15.00 | TPU material, IP67 rated |
| **Neck Pad Material** | Medical Grade Silicone | Smooth-On | $12.50 | 1 | $12.50 | Skin-safe, flexible |
| **Mounting Hardware** | Stainless Steel Screws | McMaster-Carr | $3.25 | 1 | $3.25 | M2.5, corrosion resistant |
| **Mechanical Subtotal** | | | | | **$30.75** | |

### ⚡ Power Budget Analysis

#### Energy Consumption (Estimated)
- **ESP32 (Active)**: 160mA @ 3.3V = 528mW
- **Sensors (Active)**: 45mA @ 3.3V = 148.5mW
- **LED Ring (Max)**: 60mA @ 5V = 300mW
- **Speaker (Peak)**: 62.5mA @ 8V = 500mW
- **Total Peak Power**: ~1.48W

#### Energy Harvesting Potential
- **Piezoelectric**: 25W (theoretical), ~2-5W practical
- **Solar**: 15W (full sun), ~1-3W (indoor/outdoor)
- **Combined Harvesting**: ~3-8W under typical conditions

#### Battery Life Estimates
- **Supercapacitor**: 30-60 seconds at peak load
- **Li-Ion Backup**: 2-4 hours continuous operation
- **Hybrid System**: 8-12 hours with energy harvesting

---

## 📱 MOBILE APP DESIGN

### 🎯 Design Philosophy
**"Bond Beyond Words"** - Intuitive, emotion-driven interface that enhances the human-canine connection through AI-powered insights and real-time communication.

### 📱 iOS App - Main Companion Interface

#### 🏠 Home Dashboard (Main Tab)
- **Connection Status Card**: 320x120pt with gradient background
- **Real-time Emotion Display**: 320x200pt with dynamic emotion-based background
- **Quick Actions Grid**: 2x2 grid with voice commands, location, alerts, health
- **Recent Activity Feed**: Timeline of collar events and interactions

#### 🎤 Voice Command Interface
- **Voice Waveform Visualization**: Animated frequency bars
- **Quick Commands**: "Come here", "Stay", "Good boy/girl", "Emergency alert"
- **Command History**: Scrollable list of previous commands

#### 📊 Health & Analytics Dashboard
- **Vital Signs Grid**: Heart Rate, Temperature, Activity Level, Sleep Quality
- **Emotion Trends Chart**: Line chart with 24h/7d/30d time ranges
- **Health Insights Panel**: AI-generated health recommendations

### ⌚ watchOS App - Companion Watch Interface

#### 🏠 Watch Home Screen
- **Connection Indicator**: 40x40pt circular with pulsing animation
- **Emotion Indicator**: 60x60pt large emoji with background color
- **Quick Action Button**: Single-tap emergency or command button

#### 🎤 Watch Voice Commands
- **Recording Indicator**: Animated microphone with haptic feedback
- **Quick Commands**: 2x2 grid (Come, Stay, Good, Alert)

### 🎨 Design System

#### Color Palette
- **Primary**: PuppyBlue (#3399E6), PuppyPurple (#8040CC)
- **Emotions**: JoyYellow (#FFCC33), CalmGreen (#4CCC66), AlertOrange (#FF9933), AnxietyRed (#E64D4D)
- **Status**: SuccessGreen (#33CC66), WarningYellow (#FFB333), ErrorRed (#E63333)

#### Typography
- **Headings**: System rounded fonts with bold weights
- **Body**: System rounded regular weight
- **Special**: Large emotion display font (48pt bold)

---

## 🧠 AI/ML ARCHITECTURE

### 🎯 Model Overview
**PuppyThoth EmotionNet** - Lightweight neural network for real-time canine emotion and intent classification, optimized for edge deployment on ESP32 microcontrollers.

### 🎭 Emotion & Intent Categories

#### 😊 Emotion Categories (5 classes)
- **JOY**: Happy, excited, playful
- **CALM**: Relaxed, content, peaceful
- **ANXIETY**: Nervous, worried, stressed
- **ALERT**: Attentive, focused, watchful
- **EXCITEMENT**: Energetic, enthusiastic, eager

#### 🎯 Intent Categories (8 classes)
- **ATTENTION_SEEK**: Wants owner's attention
- **PLAY_REQUEST**: Wants to play
- **FOOD_REQUEST**: Hungry or wants treats
- **POTTY_NEED**: Needs to go outside
- **DANGER_ALERT**: Perceives threat or danger
- **COMFORT_NEED**: Needs comfort or reassurance
- **EXERCISE_NEED**: Needs physical activity
- **REST_NEED**: Tired or wants to rest

### 📊 Model Performance Targets
- **Emotion Accuracy**: 85%
- **Intent Accuracy**: 80%
- **Model Size**: <100KB
- **Inference Time**: <50ms
- **Memory Usage**: <200KB
- **Power Consumption**: <150mW

### 🔄 Continuous Learning Pipeline
- **User Feedback Collection**: Real-time correction system
- **Model Fine-tuning**: Batch updates with collected feedback
- **Performance Monitoring**: Accuracy and drift tracking
- **Automatic Updates**: OTA model updates to collar

---

## 🏗️ SYSTEM ARCHITECTURE

### 📁 Complete Codebase Structure

```
puppy-thoth-alpha/
├── 🧠 ai/                                 # AI/ML Components
│   ├── 📊 models/                         # TensorFlow/Keras models
│   ├── 🎯 training/                       # Training pipeline
│   ├── 🔄 continuous_learning/            # Online learning
│   └── 📦 deployment/                     # Edge deployment
├── 🔧 firmware/                           # ESP32 Firmware
│   ├── 📁 src/                            # Source code
│   ├── 📁 include/                        # Header files
│   ├── 📁 lib/                            # External libraries
│   └── 📁 data/                           # Model files
├── 📱 mobile/                             # iOS/watchOS Apps
│   ├── 📁 PuppyThothAlpha/                # iOS App
│   └── 📁 PuppyThothWatch/                # watchOS App
├── ☁️ backend/                            # Cloud Backend Services
│   ├── 📁 api/                            # API Gateway
│   ├── 📁 realtime/                       # WebSocket server
│   ├── 📁 worker/                         # Background jobs
│   └── 📁 storage/                        # Data storage
├── 🧪 testing/                            # Testing infrastructure
├── 📚 docs/                               # Documentation
└── 🚀 deployment/                         # Deployment configs
```

### 🛠️ Technology Stack

#### Hardware/Firmware
- **Microcontroller**: ESP32 (Dual-core, WiFi + BLE)
- **AI Framework**: TensorFlow Lite for Microcontrollers
- **Language**: C++ (Arduino framework)
- **Build System**: PlatformIO

#### Mobile Apps
- **Platform**: iOS 15.0+, watchOS 8.0+
- **Framework**: SwiftUI
- **Language**: Swift
- **Build System**: Xcode

#### Backend Services
- **Runtime**: Node.js 18+
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL + Redis
- **Storage**: IPFS (decentralized)
- **Containerization**: Docker + Kubernetes

#### AI/ML Pipeline
- **Framework**: TensorFlow 2.x
- **Language**: Python 3.9+
- **Optimization**: TensorFlow Lite
- **Deployment**: Edge (ESP32)

### 🔄 Development Workflow

#### 📋 Development Phases
1. **Phase I**: Core Infrastructure
2. **Phase II**: Hardware Development
3. **Phase III**: Mobile App Development
4. **Phase IV**: Backend Development
5. **Phase V**: AI/ML Integration
6. **Phase VI**: Integration & Testing

---

## 🎯 DEVELOPMENT ROADMAP

### 🔹 Phase I: Collar Core MVP
- Assemble energy harvesting + storage unit
- Integrate primary sensors (mic, accelerometer, heart rate)
- Run basic microcontroller logic (ESP32) for data logging

### 🔹 Phase II: Edge AI Integration
- Add TensorFlow Lite model for sound/emotion classification
- Integrate TTS engine (e.g., Coqui.ai or Picovoice)
- Test voice classification-to-response loop

### 🔹 Phase III: Companion App + Cloud
- Begin iOS + watchOS front-end development (SwiftUI)
- Build Firebase/Amplify-based backend with encrypted logging
- Sync local events when collar connects to home Wi-Fi

### 🔹 Phase IV: Full-Stack Bonding
- Add Alpha Bond features
- Real-time alerts + Live Command Mode
- Begin field testing with bonded dog(s)

---

## 🔐 SECURITY & PRIVACY

### 🔒 Data Protection
- **Encryption**: AES-256 for data at rest and in transit
- **Authentication**: JWT tokens with refresh mechanism
- **Authorization**: Role-based access control (RBAC)
- **Privacy**: GDPR-compliant data handling

### 🛡️ Device Security
- **Firmware**: Signed firmware updates
- **Communication**: TLS 1.3 for all network communication
- **Storage**: Encrypted local storage on mobile devices
- **Audit**: Tamper-proof logs via IPFS

---

## 📊 PROJECT STATUS

### ✅ Completed Deliverables
- **Hardware Component Sourcing**: Complete BOM with $276.85 total cost
- **SwiftUI Wireframes**: Comprehensive iOS/watchOS app design
- **TinyML Architecture**: Complete TensorFlow Lite model design
- **Codebase Structure**: Full project architecture with all components

### 🎯 Next Steps
1. **Project Initialization**: Set up the complete codebase structure
2. **Hardware Prototyping**: Begin ESP32 firmware development
3. **Mobile App Development**: Start iOS/watchOS app implementation
4. **Backend Development**: Initialize TypeScript backend services
5. **AI Model Training**: Begin data collection and model training pipeline

---

**GitHub Repository**: https://github.com/M-K-World-Wide/PuppyThoth
**Last Updated**: Alpha Development Phase
**Status**: Ready for Phase I Development ✅ 