
## Wireless Networking Deep Dive

### Wireless LAN (WLAN) Design Considerations
#### Wireless Deployment Options

- **Autonomous Access Points (APs)**
	- Standalone, independent devices
	- Home or small office environments
	- Controller-less deployment model
	- Not commonly used in large environments

- **Lightweight Access Points (APs)**
	- Requires central *wireless LAN controller* (WLC)
	- Controller-based deployment model
	- WLCs can be physical or virtual
	- Controller communicates changes to the APs
	- *Control and Provisioning of Wireless Access Points* (CAPWAP)
		- A Protocol that allows the APs to communicate

#### Ways to Deploy

##### Cisco FlexConnect:
- Configure and control remote wireless network
- Similar to Layer 3 roaming with CAPWAP

##### Central Switched:
- Normal CAPWAP mode of operation
- Typically not the recommended mode

##### Local Switched:
- Map user traffic to VLAN on adjacent switch
- Control and management traffic still sent over CAPWAP to WLC

#### Location Services
##### Use Cases for Location Services:
- Enterprise asset tracking
- Location-based advertising

###### Note:
- **RSS** (*dBm*) - Received Signal Strength
	- Can be to triangulate a devices location

##### Cisco Solutions:
- Real-time Location Services (*RTLS*)
- Cisco DNA Spaces
- Cisco Meraki Platform (*Medium Size*)

### WLAN Design Options
#### Ad Hoc Wireless Lan
- Allows one device to communicate directly with another device with no AP

#### More Types of Designs
- **Infrastructure Wireless LAN**
	- Access Point connected to switch via ethernet
- **Mesh Wireless LAN**
	- Used when not close to an ethernet port and can connect to another AP

### Wireless Communications Theory

##### Transverse Wave
- Electric Field Vertical
- Magnetic Field Horizontal

#### How a Dipole Antenna Radiates EM Waves
- Pole is bent rather than straight or else the + and - would cancel out.
- **Lambda** (*λ*) represents the wave length

Paused at 28:03