export default JSON.stringify({
    "emvID": "ESVE_1",
    "triggerReason": "AUTHORIZE_EVENT",
    "eventType": "AUTHORIZE",
    "data": {
        "idToken": {
            "idToken": "ABCDE",
            "type": "Local",
            "customData": {
                "vendorId": "ABCDEFGH"
            },
            "additionalInfo": [
                {
                    "additionalIdToken": "ABCDEFGHIJK",
                    "type": "ABCDEFGHIJ",
                    "customData": {
                        "vendorId": "ABCDEFGHIJKLMNOPQRSTUVWXY"
                    }
                }
            ]
        },
        "customData": {
            "vendorId": "ABCDEFGHIJKLMN"
        },
        "certificate": "ABCDEFGHIJKLMN",
        "iso15118CertificateHashData": [
            {
                "hashAlgorithm": "SHA256",
                "issuerNameHash": "ABCDEFGHIJKLMNOPQR",
                "issuerKeyHash": "ABCDEFGHIJKLMNOP",
                "serialNumber": "ABCDEFGHIJKLMNOPQRST",
                "responderURL": "ABCDEFGHIJKLMNOPQRSTUVWXYZA",
                "customData": {
                    "vendorId": "ABCDEFGHIJKLMNOPQRST"
                }
            }
        ]
    }
});