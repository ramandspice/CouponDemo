package vn.android.coupon.plugins;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import org.apache.cordova.api.PluginResult.Status;
import org.json.JSONArray;
import org.json.JSONException;

import android.util.Log;

import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;

public class CouponServicesPlugin extends Plugin {
	
	private static final String AUTHENTICATE_URL = "http://www.iDealLauncher.com/Coupon/CouponService.svc/Authenticate";
	private static final String COUPON_INFO_URL = "http://www.iDealLauncher.com/Coupon/CouponService.svc/Coupon_Get";

	@Override
	public PluginResult execute(String action, JSONArray data, String callBackId) {
		PluginResult result = null;
		if(action.equalsIgnoreCase("authenticate")){
			try {
				String loginName = data.getString(0);
				String password = data.getString(1);
				String jsonResult = authenticate(loginName, password);
				if(jsonResult == null || jsonResult.trim().length() == 0){
					result = new PluginResult(Status.ERROR);
				} else{
					result = new PluginResult(Status.OK, jsonResult);
				}
			} catch (JSONException e) {
				Log.e("CouponServicesPlugin", e.getMessage());
				result = new PluginResult(Status.JSON_EXCEPTION);
			}
		} else if(action.equalsIgnoreCase("getCouponByPackageUID")){
			try {
				String packageUID = data.getString(0);
				String jsonResult = getCouponByPackageUID(packageUID);
				if(jsonResult == null || jsonResult.trim().length() == 0){
					result = new PluginResult(Status.NO_RESULT);
				} else{
					result = new PluginResult(Status.OK, jsonResult);
				}
			} catch (JSONException e) {
				Log.e("CouponServicesPlugin", e.getMessage());
				result = new PluginResult(Status.JSON_EXCEPTION);
			}
		}else{
			result = new PluginResult(Status.INVALID_ACTION);
		}
		return result;
	}
	
	private String getCouponByPackageUID(String packageUID){
		String result = "";
		if(packageUID != null){
			HttpURLConnection conn = null;
			OutputStreamWriter wr = null;
			InputStreamReader isr = null;
			BufferedReader rd = null;
			try {
				String jsonData = "{\"packageUID\":\"" + packageUID + "\"}";
			    URL url = new URL(COUPON_INFO_URL);
			    conn = (HttpURLConnection)url.openConnection();
			    conn.setRequestProperty("Content-Type", "application/json");
			    conn.setDoInput(true);
			    conn.setDoOutput(true);
			    wr = new OutputStreamWriter(conn.getOutputStream());
			    wr.write(jsonData);
			    wr.flush();

			    isr = new InputStreamReader(conn.getInputStream());
			    rd = new BufferedReader(isr);
			    String line;
			    while ((line = rd.readLine()) != null) {
			    	result = result + line;
			    }
			} catch (Exception e) {
				result = "";
			} finally{
				try {
					if(wr != null){
						wr.close();
					}
				} catch (IOException e) {
					result = "";
				}
				try {
					if(isr != null){
						isr.close();
					}
				} catch (IOException e) {
					result = "";
				}
				try {
					if(rd != null){
						rd.close();
					}
				} catch (IOException e) {
					result = "";
				}
				if(conn != null){
					conn.disconnect();
				}
			}
		}
		return result;
	}
	
	private String authenticate(String loginName, String password){
		String result = "";
		if(loginName != null && password != null){
			HttpURLConnection conn = null;
			OutputStreamWriter wr = null;
			InputStreamReader isr = null;
			BufferedReader rd = null;
			try {			
				String jsonData = "{\"loginname\":\"" + loginName + "\",\"password\":\"" + password + "\"}";
			    URL url = new URL(AUTHENTICATE_URL);
			    conn = (HttpURLConnection)url.openConnection();
			    conn.setRequestProperty("Content-Type", "application/json");
			    conn.setDoInput(true);
			    conn.setDoOutput(true);
			    wr = new OutputStreamWriter(conn.getOutputStream());
			    wr.write(jsonData);
			    wr.flush();
			    
			    isr = new InputStreamReader(conn.getInputStream());
			    rd = new BufferedReader(isr);
			    String line;
			    while ((line = rd.readLine()) != null) {
			    	result = result + line;
			    }
			} catch (Exception e) {
				result = "";
			} finally{
				try {
					if(wr != null){
						wr.close();
					}
				} catch (IOException e) {
					result = "";
				}
				try {
					if(isr != null){
						isr.close();
					}
				} catch (IOException e) {
					result = "";
				}
				try {
					if(rd != null){
						rd.close();
					}
				} catch (IOException e) {
					result = "";
				}
				if(conn != null){
					conn.disconnect();
				}
			}
		}
		return result;
	}
}
