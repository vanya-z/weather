export class ConfigService {
  public static API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather';
  public static API_KEY = '8195e6a3e1d5ff939a9c895e1a45c767';
  public static STATES = {
    "01": {
      "sun":"isMain",
      "moon":"isMain",
      "stars":"isPresent"
    },
    "02": {
      "sun":"isPresent",
      "cloud":"isPresent",
      "moon":"isPresent",
      "stars":"isPresent"
    },
    "03": {
      "cloud":"isMain"
    },
    "04": {
      "cloud":"isPresent",
      "cloud-dark":"isPresent"
    },
    "09": {
      "cloud":"isPresent",
      "cloud-dark":"isPresent",
      "rain":"isPresent"
    },
    "10": {
      "cloud":"isPresent",
      "sun":"isPresent",
      "moon":"isPresent",
      "rain":"isPresent",
      "stars":"isPresent"
    },
    "11": {
      "cloud":"isPresent",
      "cloud-dark":"isPresent",
      "thunder":"isPresent"
    },
    "13": {
      "cloud":"isPresent",
      "cloud-dark":"isPresent",
      "snow":"isPresent"
    },
    "50": {
      "mist":"isMain"
    }
  }
}