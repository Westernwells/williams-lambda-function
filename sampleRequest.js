const landedCostRequest = {
    "currency": "USD",
    "discounts": [
      {
        "id": "sale124",
        "amount": 43.00,
        "detail": null
      }
    ],
    "items": [
      {
        "id": "294395",
        "amount": 75,
        "amount_discount": 0,
        "brand": null,
        "category": "Women's Clothing",
        "category_assistant_id": 130,
        "color": null,
        "country_of_origin": "FR",
        "description_customs": null,
        "description_retail": "Hoka One Running Shoe - Women's",
        "detail": null,
        "dimensions": {
          "height": 4,
          "length": 6,
          "unit": "inch",
          "width": 11
        },
        "duty_tax_fee_free": null,
        "hs_code": "6116.10.00",
        "image_url": "https://zonos.com/images/handbag.png",
        "quantity": 1,
        "upc_code": null,
        "weight": 10,
        "weight_unit": "pound"
      },
      {
        "id": "294396",
        "amount": 15,
        "country_of_origin": "CN",
        "country_of_origin_source": "account_default",
        "description_customs": "Men's t-shirt 100% polyester",
        "description_retail": "Galaxy Quest Men's Tee Blue",
        "detail": null,
        "dimensions": {
          "height": 4,
          "lenght": 6,
          "unit": "inch",
          "width": 11
        },
        "duty_tax_fee_free": "exclude",
        "hs_code": "6217.10",
        "image_url": null,
        "note": null,
        "quantity": 1,
        "upc_code": null,
        "weight": 1,
        "weight_unit": "pound"
      }
    ],
    "landed_cost": "delivery_duty_paid",
    "sale_type": "not_for_resale",
    "ship_from_country": "US",
    "ship_to": {
      "city": "Campinas",
      "country": "BR",
      "postal_code": "75828-000",
      "state": "SP"
    },
    "shipping": {
      "amount": 14.23,
      "amount_discount": 0,
      "service_level": "ups_express_saver"
    },
    "tariff_rate": "maximum"
  }

  const dutyTaxRequest = {
    "currency": "USD",
    "items": [
      {
        "id": "294395",
        "amount": 75.00,
        "brand": null,
        "category": "Women's Clothing",
        "color": null,
        "country_of_origin": "FR",
        "description_customs": null,
        "description_retail": "Hoka One Running Shoe - Women's",
        "detail": null,
        "dimensions": {
          "height": 4.0,
          "length": 6.0,
          "unit": "inch",
          "width": 11.0
        },
        "hs_code": "6116.10.00",
        "image_url": "https://zonos.com/images/handbag.png",
        "quantity": 1,
        "upc_code": null,
        "weight": 10.0,
        "weight_unit": "pound"
      }
    ],
    "landed_cost": "delivery_duty_paid",
    "sale_type": "not_for_resale",
    "ship_from_country": "US",
    "ship_to": {
      "city": "Campinas",
      "country": "BR",
      "postal_code": "75828-000",
      "state": "SP"
    },
    "shipping": {
      "amount": 14.23,
      "service_level": "express_saver"
    }
  }

  module. exports = {landedCostRequest, dutyTaxRequest}