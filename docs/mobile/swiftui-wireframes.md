# 📱 PuppyThoth Alpha - SwiftUI Wireframes & UI/UX Design

## 🎯 Design Philosophy
**"Bond Beyond Words"** - Intuitive, emotion-driven interface that enhances the human-canine connection through AI-powered insights and real-time communication.

## 📱 iOS App - Main Companion Interface

### 🏠 Home Dashboard (Main Tab)

```swift
// Main Dashboard View Structure
struct HomeDashboardView: View {
    @StateObject private var collarManager = CollarConnectionManager()
    @StateObject private var emotionAnalyzer = EmotionAnalysisEngine()
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(spacing: 20) {
                    // Connection Status Card
                    ConnectionStatusCard()
                    
                    // Real-time Emotion Display
                    EmotionDisplayCard()
                    
                    // Quick Actions Grid
                    QuickActionsGrid()
                    
                    // Recent Activity Feed
                    ActivityFeedView()
                }
                .padding()
            }
            .navigationTitle("PuppyThoth Alpha")
            .navigationBarTitleDisplayMode(.large)
        }
    }
}
```

#### 🎨 UI Components Breakdown

**Connection Status Card**
- **Size**: 320x120pt
- **Background**: Gradient (Blue to Purple)
- **Elements**:
  - Collar battery indicator (circular progress)
  - Connection strength (signal bars)
  - Last sync timestamp
  - Quick reconnect button

**Emotion Display Card**
- **Size**: 320x200pt
- **Background**: Dynamic based on detected emotion
- **Elements**:
  - Large emotion icon (animated)
  - Confidence percentage
  - Current activity status
  - Heart rate display

**Quick Actions Grid**
- **Layout**: 2x2 grid
- **Actions**:
  - 🎤 Voice Command Mode
  - 📍 Location Tracking
  - 🔔 Alert Settings
  - 📊 Health Metrics

### 🎤 Voice Command Interface

```swift
struct VoiceCommandView: View {
    @State private var isListening = false
    @State private var commandHistory: [VoiceCommand] = []
    
    var body: some View {
        VStack(spacing: 30) {
            // Voice Visualization
            VoiceWaveformView(isActive: isListening)
            
            // Command Input
            CommandInputField()
            
            // Quick Commands
            QuickCommandButtons()
            
            // Command History
            CommandHistoryList()
        }
        .padding()
        .navigationTitle("Voice Commands")
    }
}
```

#### 🎨 Voice Interface Elements

**Voice Waveform Visualization**
- **Type**: Animated frequency bars
- **Colors**: Blue (listening), Green (processing), Red (error)
- **Animation**: Smooth transitions based on audio input

**Quick Command Buttons**
- **Layout**: Horizontal scrollable list
- **Commands**:
  - "Come here"
  - "Stay"
  - "Good boy/girl"
  - "Emergency alert"

### 📊 Health & Analytics Dashboard

```swift
struct HealthDashboardView: View {
    @StateObject private var healthManager = HealthDataManager()
    
    var body: some View {
        ScrollView {
            VStack(spacing: 25) {
                // Vital Signs Cards
                VitalSignsGrid()
                
                // Activity Timeline
                ActivityTimelineView()
                
                // Emotion Trends
                EmotionTrendsChart()
                
                // Health Insights
                HealthInsightsPanel()
            }
            .padding()
        }
        .navigationTitle("Health & Analytics")
    }
}
```

#### 📈 Analytics Components

**Vital Signs Grid**
- **Metrics**: Heart Rate, Temperature, Activity Level, Sleep Quality
- **Display**: Cards with real-time values and trends
- **Colors**: Green (normal), Yellow (caution), Red (alert)

**Emotion Trends Chart**
- **Type**: Line chart with area fill
- **Time Range**: 24 hours, 7 days, 30 days
- **Emotions**: Joy, Anxiety, Excitement, Calm, Alert

## ⌚ watchOS App - Companion Watch Interface

### 🏠 Watch Home Screen

```swift
struct WatchHomeView: View {
    @StateObject private var collarManager = CollarConnectionManager()
    
    var body: some View {
        VStack(spacing: 15) {
            // Connection Status
            ConnectionIndicator()
            
            // Current Emotion
            EmotionIndicator()
            
            // Quick Action Button
            QuickActionButton()
        }
        .padding()
    }
}
```

#### ⌚ Watch UI Elements

**Connection Indicator**
- **Size**: 40x40pt
- **Style**: Circular with pulsing animation
- **States**: Connected (green), Disconnected (red), Searching (yellow)

**Emotion Indicator**
- **Size**: 60x60pt
- **Style**: Large emoji with background color
- **Animation**: Gentle pulsing based on emotion intensity

### 🎤 Watch Voice Commands

```swift
struct WatchVoiceCommandView: View {
    @State private var isRecording = false
    
    var body: some View {
        VStack {
            // Recording Indicator
            RecordingIndicator(isActive: isRecording)
            
            // Quick Commands
            QuickCommandButtons()
        }
    }
}
```

#### ⌚ Voice Interface

**Recording Indicator**
- **Style**: Animated microphone icon
- **Feedback**: Haptic pulses during recording
- **Duration**: 10-second maximum per command

**Quick Commands**
- **Layout**: 2x2 grid of large buttons
- **Commands**: Come, Stay, Good, Alert

### 📊 Watch Health Monitor

```swift
struct WatchHealthView: View {
    var body: some View {
        ScrollView {
            VStack(spacing: 10) {
                // Heart Rate
                HeartRateCard()
                
                // Activity Level
                ActivityCard()
                
                // Battery Status
                BatteryCard()
            }
        }
    }
}
```

## 🎨 Design System & Components

### 🎨 Color Palette

```swift
extension Color {
    // Primary Colors
    static let puppyBlue = Color(red: 0.2, green: 0.6, blue: 0.9)
    static let puppyPurple = Color(red: 0.5, green: 0.3, blue: 0.8)
    
    // Emotion Colors
    static let joyYellow = Color(red: 1.0, green: 0.8, blue: 0.2)
    static let calmGreen = Color(red: 0.3, green: 0.8, blue: 0.4)
    static let alertOrange = Color(red: 1.0, green: 0.6, blue: 0.2)
    static let anxietyRed = Color(red: 0.9, green: 0.3, blue: 0.3)
    
    // Status Colors
    static let successGreen = Color(red: 0.2, green: 0.8, blue: 0.4)
    static let warningYellow = Color(red: 1.0, green: 0.7, blue: 0.2)
    static let errorRed = Color(red: 0.9, green: 0.2, blue: 0.2)
}
```

### 🔤 Typography System

```swift
extension Font {
    // Headings
    static let largeTitle = Font.system(size: 34, weight: .bold, design: .rounded)
    static let title = Font.system(size: 28, weight: .semibold, design: .rounded)
    static let headline = Font.system(size: 22, weight: .medium, design: .rounded)
    
    // Body Text
    static let body = Font.system(size: 16, weight: .regular, design: .rounded)
    static let caption = Font.system(size: 14, weight: .light, design: .rounded)
    
    // Special
    static let emotionDisplay = Font.system(size: 48, weight: .bold, design: .rounded)
}
```

### 🎭 Animation System

```swift
extension Animation {
    // Emotion Transitions
    static let emotionTransition = Animation.easeInOut(duration: 0.6)
    
    // Connection Pulses
    static let connectionPulse = Animation.easeInOut(duration: 1.2).repeatForever()
    
    // Voice Waveform
    static let waveformAnimation = Animation.easeInOut(duration: 0.3)
}
```

## 📱 Navigation Structure

### iOS App Navigation
```
TabView {
    HomeDashboardView()     // 🏠 Home
    VoiceCommandView()      // 🎤 Voice
    HealthDashboardView()   // 📊 Health
    SettingsView()          // ⚙️ Settings
}
```

### watchOS App Navigation
```
NavigationView {
    WatchHomeView()         // 🏠 Home
    WatchVoiceCommandView() // 🎤 Voice
    WatchHealthView()       // 📊 Health
}
```

## 🔧 Technical Implementation Notes

### 📱 iOS Requirements
- **Minimum iOS Version**: 15.0
- **Target Devices**: iPhone 12 and newer
- **Features**: Core Bluetooth, Core Location, HealthKit integration

### ⌚ watchOS Requirements
- **Minimum watchOS Version**: 8.0
- **Target Devices**: Apple Watch Series 6 and newer
- **Features**: HealthKit, Core Bluetooth, Haptic feedback

### 🔄 Data Synchronization
- **Real-time**: WebSocket connection for live updates
- **Background**: HealthKit sync for health data
- **Cloud**: iCloud + Firebase for cross-device sync

---
*Last Updated: Alpha Development Phase*
*Next: TinyML Emotion-Intent Model Architecture* 