export default JSON.stringify(
    {
        "emvID": "ESVE_1",
        "triggerReason": "BOOT_EVENT",
        "eventType": "BOOTEVENT",
        "data": {
            "reason": "RemoteReset",
            "chargingStation": {
                "model": "ABCDEFGHIJKLMNO",
                "vendorName": "ABCDEFGHIJKLMN",
                "customData": {
                    "vendorId": "ABCDEFGHIJ"
                },
                "serialNumber": "ABCDEFGHIJKLMNOPQR",
                "modem": {
                    "customData": {
                        "vendorId": "ABCDEFGHIJKLMNOPQRSTUVWXYZA"
                    },
                    "iccid": "ABCDE",
                    "imsi": "ABCDEFGHIJKLM"
                },
                "firmwareVersion": "ABCDEFGHIJKLMN"
            },
            "customData": {
                "vendorId": "ABCDEFGHIJKLMNOP"
            }
        }
    }
);
