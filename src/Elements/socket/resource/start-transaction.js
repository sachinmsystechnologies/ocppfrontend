export default JSON.stringify( {
    "emvID": "ESVE_1",
    "triggerReason": "TRANSACTION_EVENT",
    "eventType": "STARTED",
    "data": {
        "eventType": "Started",
        "timestamp": "ABCDEFGHIJKLMN",
        "triggerReason": "EVConnectTimeout",
        "seqNo": 105,
        "transactionInfo": {
            "transactionId": "ABCD",
            "customData": {
                "vendorId": "ABCDEFGHIJ"
            },
            "chargingState": "SuspendedEVSE",
            "timeSpentCharging": -19,
            "stoppedReason": "GroundFault",
            "remoteStartId": 706
        },

        "meterValue": [
            {
                "timestamp": "ABCDEFGHIJK",
                "sampledValue": [
                    {
                        "value": 991.0,
                        "customData": {
                            "vendorId": "ABCDEFG"
                        },
                        "context": "Transaction.Begin",
                        "measurand": "Current.Import",
                        "phase": "L3-L1",
                        "location": "EV",
                        "signedMeterValue": {
                            "signedMeterData": "ABCDEFGHIJKLMNOPQRSTUVWXY",
                            "signingMethod": "ABCDEFGHIJKLMNOPQRST",
                            "encodingMethod": "ABCDEFGHIJKLMNOPQRSTUVWX",
                            "publicKey": "ABCDEFGHIJKLMNOPQRSTUVWX",
                            "customData": {
                                "vendorId": "ABCDEFGHIJ"
                            }
                        },
                        "unitOfMeasure": {
                            "customData": {
                                "vendorId": "ABCDEFGHIJKLMNOPQRSTUVWXY"
                            },
                            "unit": "ABCDEFGHIJKLMNOPQRS",
                            "multiplier": 13
                        }
                    }
                ],
                "customData": {
                    "vendorId": "ABCDEFGHI"
                }
            }
        ],
        "offline": true,
        "numberOfPhasesUsed": 596,
        "cableMaxCurrent": 905,
        "reservationId": 992,
        "evse": {
            "id": 303,
            "customData": {
                "vendorId": "ABCDEFGHIJKLMNOPQRSTUVWXY"
            },
            "connectorId": 692
        },
        "idToken": {
            "idToken": "ABCDEFGHIJKLMNOPQ",
            "type": "Local",
            "customData": {
                "vendorId": "ABCDEFGHIJKLMNOPQRSTU"
            },
            "additionalInfo": [
                {
                    "additionalIdToken": "ABCDEFGHIJKLMNOPQRSTU",
                    "type": "ABCDEFGHIJKL",
                    "customData": {
                        "vendorId": "ABCDEFGHIJKLMNOPQ"
                    }
                }
            ]
        }
    }
});
