//function success response
export const successResponse = (data, message = 'Success') => ({
    success : true,
    message,
    data
})

//function error response
export const errorResponse = (message = 'Error',code = 500) => ({
    success : false,
    message,
    code
})