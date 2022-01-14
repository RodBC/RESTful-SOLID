export interface iMail{
    email: string;
    name: string;
}

export interface IMessage{
    to: iMail;
    from: iMail;
    subject: string;
    body: string;

}

export interface IMailProvider{
    sendMail(message: IMessage): Promise<void>;

}