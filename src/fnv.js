//FNV constants.
const FNV_PRIME = 16777619;
const FNV_OFFSET_BASIS = 2166136261;

//FNV hash function. (32-bit version)
//FNV step 1: hash = hash XOR byte_of_data.
//FNV step 2: hash = hash * FNV_Prime.
function fnv_1a(value){
	
	var hash = FNV_OFFSET_BASIS;
	for(var i=0; i<value.length; ++i){
		
		//Extract the 2 octets of value i.e. 16 bits (2 bytes).
		var c = value.charCodeAt(i);	
		
		//First byte of value.
		var first_octet = c & oxFF;	
		
		//Apply FNV steps with 1st byte.
		hash = fnv_xor(hash, first_octect);	
		hash = fnv_multiply(hash, FNV_PRIME);
		
		//Second value of value. 		
		var second_octet = c >> 8;
		
		//Apply FNV steps with 2nd byte.
		hash = fnv_xor(hash, second_octet);
		hash = fnv_multiply(hash, FNV_PRIME);
	}

	return hash;
}

//FNV step 1:hash = hash XOR byte_of_data.
function fnv_xor(hash, byte_of_data){
	return (hash ^ byte_of_data);
}

//FNV step 2: hash = hash * FNV_Prime.
function fnv_multiply(hash, fnv_prime){
	return ((hash * FNV_PRIME) | 0);   //To ensure 32 bit integer, bitwise OR with 0.
}