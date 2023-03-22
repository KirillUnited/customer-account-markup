module.exports = {
    "title": "My Account",
    "path": "/pages/account",
    "actions": [
        {
            "img": "icons/User.svg",
            "name": "Personal Info.",
            "desc": "Name, Surname, Email etc.",
            "link": "/pages/account/info"
        },
        {
            "img": "icons/Phone.svg",
            "name": "Contact Info.",
            "desc": "Name, Surname, Email etc.",
            "link": "/pages/account/contacts"
        },
        {
            "img": "icons/Email.svg",
            "name": "Email Preferences",
            "desc": "Name, Surname, Email etc.",
            "link": "/pages/account/email"
        },
        {
            "img": "icons/Lock.svg",
            "name": "Password",
            "desc": "Name, Surname, Email etc.",
            "link": "/pages/account/password"
        },
        {
            "img": "icons/bank-card.svg",
            "name": "Payments & Payouts",
            "desc": "Name, Surname, Email etc.",
            "link": "/pages/account/payments",
            "tabs": [
                {
                    "title": "payments",
                    "panel": {
                        "title": "My Payment Methods",
                        "desc": "Below are your saved payment cards. A card can be saved by purchasing tickets and selecting the \"Save<br class=\"hidden-less-sm\"/> my card for future use\" check box. Future purchases can then be made using your saved cards.",
                        "methods": [
                            {
                                "img": "icons/visa.svg",
                                "title": "3455 9011 7682 7682 7682",
                                "desc": "Exp date: 12/22"
                            },
                            {
                                "img": "icons/visa.svg",
                                "title": "**** 7124",
                                "desc": "Exp date: 05/25"
                            },
                            {
                                "img": "icons/mastercard.svg",
                                "title": "**** 5682",
                                "desc": "Exp date: 07/23"
                            }
                        ],
                        "enableButton": false,
                        "placeholder": {
                            "img": "/assets/images/payments/placeholder-cards.png",
                            "title": "Save Cards at Checkout",
                            "desc": "A card can be saved by purchasing tickets and selecting the \"Save my card for future use\" check box. Future purchases can then be made using your saved cards.",
                            "footer": "Note that card details are not stored with Quicket, and are securely stored in a PCI-DSS Level 1 certified transaction platform and credit card storage vault, provided by Peach Payments. For more information see <a href=\"#\">http://peachpayments.com</a>."
                        }
                    }
                },
                {
                    "title": "payouts",
                    "panel": {
                        "title": "My Accounts",
                        "desc": "Below are your saved bank accounts. To add an account, click the ‘Add Bank Account’ button on<br class=\"hidden-less-sm\"/> the right.",
                        "methods": [
                            {
                                "img": "icons/bank-account-1.svg",
                                "title": "**** 7682",
                                "desc": "Long Name and Long Surname of the NameLong Name and Long Surname of the NameLong Name and Long Surname of the NameLong Name and Long Surname of the Name"
                            },
                            {
                                "img": "icons/bank-account-1.svg",
                                "title": "**** 7124",
                                "desc": "Name Surname"
                            },
                            {
                                "img": "icons/bank-account-2.svg",
                                "title": "**** 5682",
                                "desc": "Name Surname"
                            }
                        ],
                        "enableButton": "Add Bank Accounts",
                        "placeholder": {
                            "img": "/assets/images/payments/placeholder-accounts.png",
                            "title": "Add Bank Accounts",
                            "desc": "Bank Account details are relevant for the comission payments earned either through <a href=\"#\">referral</a> or <a href=\"#\">promoter network</a> links.",
                            "footer": null
                        }
                    }
                }
            ]
        },
        {
            "img": "icons/node_multiple_outlined.svg",
            "name": "API Keys",
            "desc": "Name, Surname, Email etc.",
            "link": "/pages/account/api"
        }
    ]
}
