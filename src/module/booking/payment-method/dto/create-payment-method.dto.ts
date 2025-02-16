export class CreatePaymentBankingDto {
    bankName: string;
    accountNumber: string;
    accountName: string;
}

export class CreatePaymentMethodDto {
    name: string;
    banking?: CreatePaymentBankingDto;
    type: string;
    icon: string;
    status: boolean;
    isDefault?: boolean;
}

