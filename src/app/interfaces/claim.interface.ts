export interface MyClaim {
  message: String,
  claim: any
}

export interface Summary {

  claimApproved: number,
  claimRejected: number,
  claimSubmitted: number,
  claimUnderReview: number,
  message: string,
  totalClaims: number,
}


export interface AllClaim {
  message: String,
  getAllClaim: any
}

export interface MonthItem {
  month: string;
  count: number;
}
export interface MonthlyClaimResponse {
  message: string;
  result: MonthItem[];
}
