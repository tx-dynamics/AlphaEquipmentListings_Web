export const BASE_URL = 'https://api.equimentexchange.com/'
export const IMAGE_BASE_URL = ''
export const googleApiKey = 'AIzaSyAIfgWBooxQYHqpajAHOQCoaydZuJhOKQY'

export const api = {
    login: 'user/login',
    signup: 'user/signup',
    sendAgainSignupOtp: 'user/sendOTP',
    verifyEmail: 'user/verify',
    logout: 'user/logout',
    verifyOtp: 'user/verifyOTPGeneric',

    forgotPassword: 'user/forgotPassword',
    verifyForgotEmail: 'user/verifyOTPResetPassword',
    resetPassword: 'user/resetPassword',
    createStore: 'shop',
    verifyStore: 'verifyShop',
    myProfile: 'user/me',
    product: 'product',
    updatePassword: 'user/updateMyPassword',
    sendOtpVerifyPassword: 'user/sendOTPVerifyPassword',
    verifyDeleteMe: 'user/deleteMe',
    updateProfile: 'user/updateProfile',
    category: 'category',
    buyerDashboard: 'buyer-product',
    sellerDashboard: 'seller-product',
    buyRequest: 'buy-request',
    getAllOrders: 'buy-request/all',
    bid: 'bid',
    finance: 'finance',
    getSubscriptions: 'subscription_types',
    subscription: 'subscription',
    rentedProduct: 'rent',
    socialLogin: 'user/socialLogin',
    feedback: 'feedback',
    getWallet: 'wallet',
    withdrawalWallet: 'withdraw',
    topupWallet: 'topup',
    notification: 'notification',


}
