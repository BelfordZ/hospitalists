function Shift(aday, ashift) {
   this.day = aday;
   this.shift = ashift;
   this.employeeWorking;
   this.getType();
}
// type 0-> rounding shift
// type 1-> admitting shift
Shift.prototype.getType = function() {
   if (this.shift < global.NUM_ROUNDING_SHIFTS())
      this.type = 0;
   else
      this.type = 1;
}