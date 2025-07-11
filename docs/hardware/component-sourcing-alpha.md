# 🔋 PuppyThoth Alpha - Hardware Component Sourcing List

## 📊 Bill of Materials (BOM) - Alpha Unit

### 🔋 Power System Components

| Component | Part Number | Vendor | Unit Price | Quantity | Total | Notes |
|-----------|-------------|--------|------------|----------|-------|-------|
| **Piezoelectric Energy Harvester** | Mide Volture V25W | Mide Technology | $45.00 | 1 | $45.00 | 25W output, flexible mounting |
| **Flexible Solar Film** | PowerFilm F15-1200 | PowerFilm Solar | $28.50 | 1 | $28.50 | 15W, 1200mA output |
| **Supercapacitor** | Maxwell BCAP0350 | Maxwell Technologies | $12.75 | 2 | $25.50 | 350F, 2.7V each |
| **Backup Li-Ion Battery** | Tenergy 3.7V 300mAh | Tenergy | $8.95 | 1 | $8.95 | Compact form factor |
| **Power Management IC** | TI BQ25570 | Texas Instruments | $3.25 | 1 | $3.25 | Energy harvesting PMIC |
| **Voltage Regulator** | LM317T | STMicroelectronics | $1.15 | 1 | $1.15 | 3.3V output regulation |
| **Power System Subtotal** | | | | | **$112.35** | |

### 🎤 Input Sensors

| Component | Part Number | Vendor | Unit Price | Quantity | Total | Notes |
|-----------|-------------|--------|------------|----------|-------|-------|
| **MEMS Microphone Array** | Knowles SPH0645LM4H-B | Knowles | $18.50 | 2 | $37.00 | Low-power digital mic array |
| **Accelerometer + Gyro** | Bosch BHI260AP | Bosch Sensortec | $15.75 | 1 | $15.75 | Smart sensor with AI capabilities |
| **Heart Rate Sensor** | Maxim MAX30102 | Maxim Integrated | $12.40 | 1 | $12.40 | PPG + SpO2 monitoring |
| **Temperature Sensor** | TI TMP117 | Texas Instruments | $4.85 | 1 | $4.85 | High-precision ±0.1°C |
| **Proximity Sensor** | ST VL53L1X | STMicroelectronics | $8.90 | 1 | $8.90 | Time-of-Flight sensor |
| **Sensors Subtotal** | | | | | **$78.90** | |

### 📡 Output Systems

| Component | Part Number | Vendor | Unit Price | Quantity | Total | Notes |
|-----------|-------------|--------|------------|----------|-------|-------|
| **Micro Speaker** | Adafruit Mini Metal Speaker | Adafruit | $3.95 | 1 | $3.95 | 8Ω, 0.5W output |
| **Bone Conduction Transducer** | Vesper VM1000 | Vesper | $22.50 | 1 | $22.50 | High-efficiency bone conduction |
| **RGB LED Ring** | WS2812B Addressable Strip | WorldSemi | $6.75 | 1 | $6.75 | 12 LEDs, individually addressable |
| **Haptic Feedback Motor** | Precision ERM 3V | Precision Microdrives | $4.25 | 1 | $4.25 | Vibration motor for alerts |
| **Output Systems Subtotal** | | | | | **$37.45** | |

### 🧠 Processing & Communication

| Component | Part Number | Vendor | Unit Price | Quantity | Total | Notes |
|-----------|-------------|--------|------------|----------|-------|-------|
| **Microcontroller** | ESP32-WROOM-32 | Espressif | $8.50 | 1 | $8.50 | Dual-core, WiFi + BLE |
| **Flash Memory** | Winbond W25Q128 | Winbond | $2.15 | 1 | $2.15 | 128Mbit SPI flash |
| **Bluetooth Module** | nRF52840 | Nordic Semiconductor | $6.75 | 1 | $6.75 | BLE 5.0 + Thread |
| **Processing Subtotal** | | | | | **$17.40** | |

### 🔧 Mechanical & Enclosure

| Component | Part Number | Vendor | Unit Price | Quantity | Total | Notes |
|-----------|-------------|--------|------------|----------|-------|-------|
| **Waterproof Enclosure** | Custom 3D Printed | Local Fabrication | $15.00 | 1 | $15.00 | TPU material, IP67 rated |
| **Neck Pad Material** | Medical Grade Silicone | Smooth-On | $12.50 | 1 | $12.50 | Skin-safe, flexible |
| **Mounting Hardware** | Stainless Steel Screws | McMaster-Carr | $3.25 | 1 | $3.25 | M2.5, corrosion resistant |
| **Mechanical Subtotal** | | | | | **$30.75** | |

### 📊 **TOTAL BOM COST: $276.85**

## 🎯 Cost Optimization Strategies

### Phase I MVP (Reduced Features)
- Remove bone conduction transducer: **-$22.50**
- Use single MEMS mic instead of array: **-$18.50**
- Simplified enclosure: **-$10.00**
- **MVP Total: $225.85**

### Bulk Ordering (10+ units)
- 15% volume discount: **-$41.53**
- **Bulk Total: $235.32 per unit**

## 📦 Vendor Recommendations

### Primary Vendors
1. **Mouser Electronics** - Main components, reliable shipping
2. **Digi-Key** - Alternative source, excellent documentation
3. **Adafruit** - Development boards and sensors
4. **SparkFun** - Prototyping supplies

### Specialized Vendors
- **Mide Technology** - Piezoelectric harvesters
- **PowerFilm Solar** - Flexible solar panels
- **Precision Microdrives** - Haptic motors

## ⚡ Power Budget Analysis

### Energy Consumption (Estimated)
- **ESP32 (Active)**: 160mA @ 3.3V = 528mW
- **Sensors (Active)**: 45mA @ 3.3V = 148.5mW
- **LED Ring (Max)**: 60mA @ 5V = 300mW
- **Speaker (Peak)**: 62.5mA @ 8V = 500mW
- **Total Peak Power**: ~1.48W

### Energy Harvesting Potential
- **Piezoelectric**: 25W (theoretical), ~2-5W practical
- **Solar**: 15W (full sun), ~1-3W (indoor/outdoor)
- **Combined Harvesting**: ~3-8W under typical conditions

### Battery Life Estimates
- **Supercapacitor**: 30-60 seconds at peak load
- **Li-Ion Backup**: 2-4 hours continuous operation
- **Hybrid System**: 8-12 hours with energy harvesting

## 🔧 Assembly Considerations

### PCB Design Requirements
- **4-layer board** for signal integrity
- **Flexible sections** for collar curvature
- **Waterproof coating** for environmental protection
- **Thermal management** for power components

### Testing Requirements
- **Environmental testing** (IP67 compliance)
- **Battery life validation**
- **Sensor calibration**
- **RF performance testing**

---
*Last Updated: Alpha Development Phase*
*Next: SwiftUI Wireframes & AI Architecture* 