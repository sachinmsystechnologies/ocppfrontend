export default JSON.stringify(
    {
        "emvID": "ESVE_1",
        "triggerReason": "METER_EVENT",
        "eventType": "METER VALUE",
        "data": {
            "evseId": 697,
            "meterValue": [
                {
                    "timestamp": "ABCDEFGHIJ",
                    "sampledValue": [
                        {
                            "value": 991,
                            "customData": {
                                "vendorId": "ABCDEFGHIJ"
                            },
                            "context": "Transaction.Begin",
                            "measurand": "Power.Offered",
                            "phase": "L1",
                            "location": "EV",
                            "signedMeterValue": {
                                "signedMeterData": "ABCDEFGHIJKLMN",
                                "signingMethod": "ABCDEFGH",
                                "encodingMethod": "ABCDEFGHIJKLMNOPQR",
                                "publicKey": "ABCDEFGHIJKLMNOP",
                                "customData": {
                                    "vendorId": "ABCDEFGHIJKLMNOPQRSTUVWXYZABC"
                                }
                            },
                            "unitOfMeasure": {
                                "customData": {
                                    "vendorId": "ABCDEFGHIJKLMNOPQRSTUV"
                                },
                                "unit": "ABCDE",
                                "multiplier": 554
                            }
                        }
                    ],
                    "customData": {
                        "vendorId": "ABCDEFGHIJKLMNOPQRSTU"
                    }
                }
            ],
            "customData": {
                "vendorId": "ABCDEFGHIJKLMNOPQRST"
            }
        }
    });
