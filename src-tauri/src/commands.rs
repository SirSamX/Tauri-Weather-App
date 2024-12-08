use tauri::command;
use tauri_plugin_http::reqwest;
use serde::{Deserialize, Serialize};
use std::env;

#[derive(Serialize, Deserialize)]
pub struct WeatherResponse {
    pub location: String,
    pub temperature: f64,
}

#[command]
pub async fn get_weather(city: String) -> Result<WeatherResponse, String> {
    //let api_key = env::var("WEATHER_API_KEY").map_err(|_| "API key not set".to_string())?;
    let api_key = "c7596911d9f04282bee163344242311";
    let url = format!(
        "https://api.weatherapi.com/v1/current.json?key={}&q={}",
        api_key, city
    );

    let response = reqwest::get(&url)
        .await
        .map_err(|e| e.to_string())?
        .json::<WeatherResponse>()
        .await
        .map_err(|e| e.to_string())?;

    Ok(response)
}
