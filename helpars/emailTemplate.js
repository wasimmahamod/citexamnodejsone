function emailTemplate(ttoken){
    return ` <img style="width: 150px;" src="https://i.ibb.co/MCcZmPG/logo.png" alt=""> <h2 style="font-size: 24; font-weight: 600 ; font-family: 'Times New Roman', Times, serif;">Creative it Website Accout Verification </h2> <h4 style="font-size: 18; font-weight: 500 ; font-family: 'Times New Roman', Times, serif">Please Verify Your Email</h4> <button style="font-size: 16; font-weight: 400 ; font-family: 'Times New Roman', Times, serif; padding: 10px 20px; background: green; color: white; border: none; border-radius: 20px;">Verify</button>${ttoken}`
}

module.exports =emailTemplate;