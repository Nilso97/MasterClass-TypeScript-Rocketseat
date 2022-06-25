"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendMail(to, message) {
        console.log(`Email enviado par ${to.name}: ${message.subject}`);
    }
}
exports.default = EmailService;
