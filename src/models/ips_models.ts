/*********************************************************************
* Copyright (c) Intel Corporation 2021
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { CIM_SecurityService, CIM_Service, CIM_ManagedElement } from './cim_models'
import { ReturnValue } from './common'

export interface IPS_HostBasedSetupService extends CIM_SecurityService {
  CurrentControlMode?: number
  AllowedControlModes?: number[]
  ConfigurationNonce?: number[]
  CertChainStatus?: number
}

export interface IPS_OptInService extends CIM_Service {
  OptInCodeTimeout?: number
  OptInRequired?: number
  OptInState?: number
  CanModifyOptInPolicy?: number
  OptInDisplayTimeout?: number
}

export interface IPS_OptInServiceResponse{
  IPS_OptInService: IPS_OptInService
}

export interface StartOptIn_OUTPUT {
  StartOptIn_OUTPUT: ReturnValue
}
export interface CancelOptIn_OUTPUT {
  CancelOptIn_OUTPUT: ReturnValue
}

export interface SendOptInCode_OUTPUT {
  SendOptInCode_OUTPUT: ReturnValue
}

export interface IPS_AlarmClockOccurrence extends CIM_ManagedElement {
  InstanceID: string
  StartTime: Date
  Interval?: number
  DeleteOnCompletion: boolean
}
