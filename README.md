# Recurring Charges Exercise

## Summary
This application reads a list of charges on your credit card and then tells you which charges are recurring.

## Requirements
### Display Recurring Charges
* return the number of charges for each service
  * filter out charges that are not recurring
* return the amount of the recurring charge for each service

#### Inputs
An array of charges with the following attributes:
* `name` - A string that shows who the charge is coming from
* `date` - The date on which the charge occurred
* `amount` - The amount of money that the charge is for

*Example Format:*
```javascript
{
  name: 'NextCapital Premium',
  date: '01/01/2019',
  amount: 9.99
}
```

#### Outputs
An object containing:
* Key - The name of the charge
* Value - The number of times a charge with the respective name showed up on the statement

*Example Format:*
```javascript
{
  Spotify: 12,
  'NextCapital Premium': 4
}
```
