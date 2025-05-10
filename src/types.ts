export interface ITransaction {
  /**
   * Unique identifier for the transaction
   */
  id: string;
  /**
   * Date of the transaction in milliseconds since epoch
   */
  date: number;
  /**
   * String with transaction value in brazillian cents
   * @example "1000" // 10.00
   * @example "500" // 5.00
   */
  amount: string;
  /**
   * Type of transaction, either deposit or withdraw
   */
  transaction_type: "deposit" | "withdraw";
  /**
   * FIAT currency of the transaction
   * @example "brl"
   */
  currency: "brl";
  /**
   * Account name associated with the transaction
   */
  account: string;
  /**
   * Category of the transaction
   */
  industry:
    | "Apparel"
    | "Automotive Retailing"
    | "Food Consumer Products"
    | "Airlines"
    | "Oil and Gas Equipment"
    | "Hotels"
    | "Education"
    | "Computer Software"
    | "Advertising";
  /**
   * State where the transaction was made
   */
  state:
    | "AL"
    | "AK"
    | "AZ"
    | "AR"
    | "CA"
    | "CO"
    | "CT"
    | "DE"
    | "FL"
    | "GA"
    | "HI"
    | "ID"
    | "IL"
    | "IN"
    | "IA"
    | "KS"
    | "KY"
    | "LA"
    | "ME"
    | "MD"
    | "MA"
    | "MI"
    | "MN"
    | "MS"
    | "MO"
    | "MT"
    | "NE"
    | "NV"
    | "NH"
    | "NJ"
    | "NM"
    | "NY"
    | "NC"
    | "ND"
    | "OH"
    | "OK"
    | "OR"
    | "PA"
    | "RI"
    | "SC"
    | "SD"
    | "TN"
    | "TX"
    | "UT"
    | "VT"
    | "VA"
    | "WA"
    | "WV"
    | "WI"
    | "WY";
}
