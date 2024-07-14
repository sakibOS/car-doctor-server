/**
 * install jsonwebtoken
 * jwt.sign(payload,secret, {expressIn:})
 * token client
 * 
 * 
 */
/**
 * how to store token in the client side
 * 1.memory -->ok type
 * 2.local storage-->ok type(XSS)
 * 3.cookies:http only
 * 
 */

/**
 * 1.set cookies with http only.for development secure:false;
 * 2.cors
 * 3.client side axios setting
 * 4.in axios set withCredentials:true
 * 5.
 */

/**
 * 1.to send cookies from the client make sure you added withCredentials true for the api call using axios
 * 2.use cookie parser as middleware
 * 
 */