/**
* A simple bitview for Array buffer.
* @author: Joy Ghosh.
* @version: 1.0
*/
var BitView = function(buffer){
	this.buffer = buffer;
	this.unit8 = new Uint8Array(buffer);
}

/**
* Returns the bit value at position 'index'.
*/
BitView.prototype.get = function(index){
	var value = this.unit8[index >> 3];
	var offset = index & 0x7;
	return ((value >> (7-offset)) & 1);
}

/**
* Sets the bit value at specified position 'index'.
*/
BitView.prototype.set = function(index){
	var offset = index & 0x7;
	this.unit8[index >> 3] |= (0x80 >> offset);
}

/**
* Clears the bit at position 'index'.
*/
BitView.prototype.clear = function(index){
	var offset = index & 0x7;
	this.unit8[index >> 3] &= ~(0x80 >> offset);
}