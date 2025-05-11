import { INDUSTRY_LIST, US_STATES } from "./constants";

export interface ITransaction {
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
  industry: (typeof INDUSTRY_LIST)[number];
  /**
   * State where the transaction was made
   */
  state: (typeof US_STATES)[number];
}
