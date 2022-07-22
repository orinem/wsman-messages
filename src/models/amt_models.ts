/*********************************************************************
* Copyright (c) Intel Corporation 2021
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { CIM_ManagedElement, CIM_SettingData, CIM_EthernetPort, CIM_BootSettingData, CIM_CredentialManagementService, CIM_MessageLog } from './cim_models'

export interface amtAuthenticateObject {
  nonce?: number[]
  uuid?: string[]
  fqdn?: string
  fwVersion?: string
  amtSvn?: number
  signatureMechanism?: number
  signature?: number[]
  lengthOfCertificates?: number[]
  certificates?: number[]
}

export interface AMT_GeneralSettings extends CIM_SettingData {
  NetworkInterfaceEnabled?: boolean
  DigestRealm?: string
  IdleWakeTimeout?: number
  HostName?: string
  DomainName?: string
  PingResponseEnabled?: boolean
  WsmanOnlyMode?: boolean
  PreferredAddressFamily?: number
  DHCPv6ConfigurationTimeout?: number
  DDNSUpdateByDHCPServerEnabled?: boolean
  SharedFQDN?: boolean
  HostOSFQDN?: string
  DDNSTTL?: number
  AMTNetworkEnabled?: number
  RmcpPingResponseEnabled?: boolean
  DDNSPeriodicUpdateInterval?: number
  PresenceNotificationInterval?: number
  PrivacyLevel?: number
  PowerSource?: number
  ThunderboltDockEnabled?: number
  AMTAuthenticate?: (mcNonce: number) => amtAuthenticateObject
}

export interface AMT_GeneralSettingsResponse {
  AMT_GeneralSettings: AMT_GeneralSettings
}

export interface AMT_EthernetPortSettings extends CIM_SettingData {
  VLANTag?: number
  SharedMAC?: boolean
  MACAddress?: string
  LinkIsUp?: boolean
  LinkPolicy?: number[]
  LinkPreference?: number
  LinkControl?: number
  SharedStaticIp?: boolean
  SharedDynamicIP?: boolean
  IpSyncEnabled?: boolean
  DHCPEnabled?: boolean
  IPAddress?: string
  SubnetMask?: string
  DefaultGateway?: string
  PrimaryDNS?: string
  SecondaryDNS?: string
  ConsoleTcpMaxRetransmissions?: number
  WLANLinkProtectionLevel?: number
  PhysicalConnectionType?: number
  PhysicalNicMedium?: number
  SetLinkPreferences?: (linkPreference: number, timeout: number) => number
  CancelLinkProtection?: () => number
  RestoreLinkProtection?: () => number
}

export interface MPServer {
  AccessInfo?: string
  InfoFormat?: number
  Port?: number
  AuthMethod?: number
  Username?: string
  Password?: string
  CommonName?: string
}

export interface RemoteAccessPolicyRule {
  Trigger?: number
  TunnelLifeTime?: number
  ExtendedData?: string
}

export interface AMT_SystemDefensePolicy extends CIM_ManagedElement {
  PolicyName?: string
  PolicyPrecedence?: number
  AntiSpoofingSupport?: number
  FilterCreationHandles?: number[]
  TxDefaultDrop?: boolean
  TxDefaultMatchEvent?: boolean
  TxDefaultCount?: boolean
  RxDefaultDrop?: boolean
  RxDefaultMatchEvent?: boolean
  RxDefaultCount?: boolean
  GetTimeout?: () => number
  SetTimeout?: (number) => number
  UpdateStatistics?: (networkInterface: CIM_EthernetPort, resetOnRead: boolean) => number
}
export interface AMT_EnvironmentDetectionSettingData extends CIM_SettingData {
  DetectionAlgorithm?: number
  DetectionStrings?: string[]
  DetectionIPv6LocalPrefixes?: string[]
  SetSystemDefensePolicy?: (policy: AMT_SystemDefensePolicy) => number
  EnableVpnRouting?: (enable: boolean) => number
}

export interface AMT_BootCapabilities extends CIM_ManagedElement{
  AMT_BootCapabilities: {
  // The user friendly name for this instance of Capabilities . . .
    ElementName: string
    // Within the scope of the instantiating Namespace, InstanceID opaquely and uniquely identifies an instance of this class . . .
    InstanceID: string
    // Indicates whether Intel(R) AMT device supports 'IDE Redirection'
    IDER: boolean
    // Indicates whether Intel(R) AMT device supports 'Serial Over Lan'
    SOL: boolean
    // Indicates whether Intel(R) AMT device supports 'BIOS Reflash'
    BIOSReflash: boolean
    // Indicates whether Intel(R) AMT device supports 'BIOS Setup'
    BIOSSetup: boolean
    // Indicates whether Intel(R) AMT device supports 'BIOS Pause'
    BIOSPause: boolean
    // Indicates whether Intel(R) AMT device supports 'Force PXE Boot'
    ForcePXEBoot: boolean
    // Indicates whether Intel(R) AMT device supports 'Force Hard Drive Boot'
    ForceHardDriveBoot: boolean
    // Indicates whether Intel(R) AMT device supports 'Force Hard Drive Safe Mode Boot'
    ForceHardDriveSafeModeBoot: boolean
    // Indicates whether Intel(R) AMT device supports 'Force Diagnostic Boot'
    ForceDiagnosticBoot: boolean
    // Indicates whether Intel(R) AMT device supports 'Force CD or DVD Boot'
    ForceCDorDVDBoot: boolean
    // Indicates whether Intel(R) AMT device supports 'Verbosity Screen Blank'
    VerbosityScreenBlank: boolean
    // Indicates whether Intel(R) AMT device supports 'Power Button Lock'
    PowerButtonLock: boolean
    // Indicates whether Intel(R) AMT device supports 'Reset Button Lock'
    ResetButtonLock: boolean
    // Indicates whether Intel(R) AMT device supports 'Keyboard Lock'
    KeyboardLock: boolean
    // Indicates whether Intel(R) AMT device supports 'Sleep Button Lock'
    SleepButtonLock: boolean
    // Indicates whether Intel(R) AMT device supports 'User Password Bypass'
    UserPasswordBypass: boolean
    // Indicates whether Intel(R) AMT device supports 'Forced Progress Events'
    ForcedProgressEvents: boolean
    // Indicates whether Intel(R) AMT device supports 'Verbosity/Verbose'
    VerbosityVerbose: boolean
    // Indicates whether Intel(R) AMT device supports 'Verbosity/Quiet'
    VerbosityQuiet: boolean
    // Indicates whether Intel(R) AMT device supports 'Configuration Data Reset'
    ConfigurationDataReset: boolean
    // Indicates whether Intel(R) AMT device supports 'BIOS Secure Boot'
    BIOSSecureBoot: boolean
    // Indicates whether Intel(R) AMT device supports 'Secure Erase'
    SecureErase: boolean
    // Supports Intel AMT invoking boot to WinRE
    ForceWinREBoot: boolean
    // Supports booting to an ISV’s PBA
    ForceUEFILocalPBABoot: boolean
    // Supports Intel AMT invoking HTTPS boot
    ForceUEFIHTTPSBoot: boolean
    // Determines whether Intel AMT is privileged by BIOS to disable secure boot for an AMT triggered boot option. If true, the BIOS allows Intel AMT to control the secure boot (i.e., to disable secure boot in recovery from HTTPS under certain conditions).
    AMTSecureBootControl: boolean
    // Read-only field, determines whether UEFI BIOS and Intel AMT WiFi profile share is supported.
    UEFIWiFiCoExistenceAndProfileShare: boolean
    // Indicates whether the Intel AMT device supports Remote Secure Platform Erase (i.e., whether the OEM's BIOS includes support for the feature), and shows the devices that can be erased.
    PlatformErase: number
  }
}

export interface AMT_BootSettingData extends CIM_BootSettingData {
  UseSOL?: boolean
  UseSafeMode?: boolean
  ReflashBIOS?: boolean
  BIOSSetup?: boolean
  BIOSPause?: boolean
  LockPowerButton?: boolean
  LockResetButton?: boolean
  LockKeyboard?: boolean
  LockSleepButton?: boolean
  UserPasswordBypass?: boolean
  ForcedProgressEvents?: boolean
  FirmwareVerbosity?: number
  ConfigurationDataReset?: boolean
  IDERBootDevice?: number
  UseIDER?: boolean
  EnforceSecureBoot?: boolean
  BootMediaIndex?: number
  SecureErase?: boolean
  RSEPassword?: string
  OptionsCleared?: boolean
  WinREBootEnabled?: boolean
  UEFILocalPBABootEnabled?: boolean
  UEFIHTTPSBootEnabled?: boolean
  SecureBootControlEnabled?: boolean
  BootguardStatus?: boolean
  BIOSLastStatus?: number[]
  UEFIBootParametersArray?: number[]
  UEFIBootNumberOfParams?: number[]
}
export interface AMT_BootSettingDataResponse {
  AMT_BootSettingData: AMT_BootSettingData
}

export interface AMT_SetupAndConfigurationService extends CIM_CredentialManagementService {
  AMT_SetupAndConfigurationService: {
    CreationClassName: string
    ElementName: string
    EnabledState: string
    Name: string
    PasswordModel: string
    ProvisioningMode: string
    ProvisioningServerOTP: string
    ProvisioningState: string
    RequestedState: string
    SystemCreationClassName: string
    SystemName: string
    ZeroTouchConfigurationEnabled: string
  }
}

export interface AMT_MessageLog extends CIM_MessageLog {}

// Event Log Records have no header and the record data is combined of 21 binary bytes which could be read as EVENT_DATA
export interface EVENT_DATA {
  DeviceAddress?: number
  EventSensorType?: number
  EventType?: number
  EventOffset?: number
  EventSourceType?: number
  EventSeverity?: number
  SensorNumber?: number
  Entity?: number
  EntityInstance?: number
  EventData?: number[]
  TimeStamp?: Date
}
export interface AMT_AuditLog_ReadRecords {
  ReadRecords_OUTPUT: {
    TotalRecordCount: string
    RecordsReturned: string
    EventRecords: string[]
    ReturnValue: string
  }
}
export interface AMT_RedirectionService{
  // The Name property uniquely identifies the Service and provides an indication of the functionality that is managed . . .
  Name: string
  // CreationClassName indicates the name of the class or the subclass that is used in the creation of an instance . . .
  CreationClassName: string
  // The Name of the scoping System.
  SystemName: string
  // The CreationClassName of the scoping System.
  SystemCreationClassName: string
  // A user-friendly name for the object . . .
  ElementName: string
  // Describes the listener state of this service . . .
  ListenerEnabled: boolean
  // A list of string elements, describing recent IDE redirection operations . . .
  AccessLog: string
  // EnabledState is an integer enumeration that indicates the enabled and disabled states of an element . . .
  EnabledState: number
}
export interface AMT_RedirectionResponse{
  AMT_RedirectionService: AMT_RedirectionService
}

export interface AlarmClockService {
  Name: string
  CreationClassName: string
  SystemName: string
  SystemCreationClassName: string
  ElementName: string
}
