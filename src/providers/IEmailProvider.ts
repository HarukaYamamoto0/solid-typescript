export interface IAddress {
	name: string;
	email: string;
}

export interface IMail {
	to: IAddress;
	from: IAddress;
	subject: string;
	body: string;
}

export interface IMailProvider {
	sendMail(email: IMail): Promise<void>;
}
