var CouponServices = function(){
};

CouponServices.prototype.authenticate = function(loginName, password, successCallback, failureCallback){
	return PhoneGap.exec(
				successCallback,
				failureCallback,
				'CouponServicesPlugin',
				'authenticate',
				[loginName, password]
			);
};

CouponServices.prototype.getCouponByPackageUID = function(packageUID, successCallback, failureCallback){
	return PhoneGap.exec(
				successCallback,
				failureCallback,
				'CouponServicesPlugin',
				'getCouponByPackageUID',
				[packageUID]
			);
};

PhoneGap.addConstructor(function(){
	PhoneGap.addPlugin("couponServices", new CouponServices());
});