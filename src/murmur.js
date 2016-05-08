/** 
Murmur3 hash function.
@author: Joy Ghosh
@version: 1.0
*/

//Murmur constants.
const C1 = 3432918353;
const C2 = 461845907;
const R1 = 15;
const R2 = 13;
const M = 5;
const N = 3864292196;

//Murmurhash3 implementation.
function murmur3_32(key, len, seed){
	
	var uint32_array = new Uint32Array(key);
	var hash = seed;
	
	//For each 4 bytes chunk.
	for(var i=0; i<key.length; i+=2){
		
		//Extract 4 bytes of the key. 
		var first_2bytes = key.charCodeAt(i++);
		var second_2bytes = key.charCodeAt(i);
		var k = (first_2bytes );

		k = k * C1;
		k = rotl(k, R1);
		k = k * C2;

		hash = hash ^ k;
		hash = rotl(hash, R2);
		hash = hash * (M + N);
	}

	//For remaining bytes in key.
	
}

//circular left shift.
function rotl(value, n){
	return (value << n) | (value >>> (32-n));
}