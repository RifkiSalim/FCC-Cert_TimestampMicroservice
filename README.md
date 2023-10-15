# Timestamp Microservice API

This Timestamp Microservice API is a simple service that allows you to convert valid date strings to Unix timestamps and UTC date strings. It is designed to be functionally similar to the [FreeCodeCamp Timestamp Microservice example](https://timestamp-microservice.freecodecamp.rocks/).

## How it Works

This API can be accessed via HTTP requests to the following endpoint:

```
/api/:date?
```

- `:date` is a parameter that can be any valid date string or undefined.

### Functionality

1. **Valid Date Conversion**:

   - A request to `/api/:date?` with a valid date will return a JSON object with two keys:
     - `unix`: A Unix timestamp of the input date in milliseconds (as a Number).
     - `utc`: A string representing the input date in the format "Thu, 01 Jan 1970 00:00:00 GMT".

2. **Specific Date Example**:

   - A request to `/api/1451001600000` will return:
     ```
     {
       "unix": 1451001600000,
       "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
     }
     ```

3. **Handling of Date Formats**:

   - Your project can handle dates that can be successfully parsed by `new Date(date_string)`.

4. **Invalid Date Handling**:

   - If the input date string is invalid, the API returns an object with the structure:
     ```
     {
       "error": "Invalid Date"
     }
     ```

5. **Empty Date Parameter**:
   - An empty date parameter will return the current time in a JSON object with two keys:
     - `unix`: The current Unix timestamp in milliseconds.
     - `utc`: The current UTC date string.

## Example Usage

- To convert a date to Unix timestamp and UTC format:

  - `GET /api/2023-10-15`
  - Response:
    ```
    {
      "unix": 1694841600000,
      "utc": "Sun, 15 Oct 2023 00:00:00 GMT"
    }
    ```

- For an invalid date:

  - `GET /api/not-a-date`
  - Response:
    ```
    {
      "error": "Invalid Date"
    }
    ```

- To get the current time:
  - `GET /api/`
  - Response (example):
    ```
    {
      "unix": 1694841600000,
      "utc": "Sun, 15 Oct 2023 00:00:00 GMT"
    }
    ```

## Live Example

You can check a live example of this API that is functionally similar to FreeCodeCamp's example at [https://timestamp-microservice.freecodecamp.rocks/](https://timestamp-microservice.freecodecamp.rocks/).

## Getting Started

To run this API on your local machine, follow these steps:

1. Clone this repository.
2. Install the required dependencies using npm.
3. Start the server.

```
npm run dev
```

4. Access the API at `http://localhost:3000/api/:date?`.

## Author

Rifki Salim

## License

This project is open-source and available under the [MIT License](LICENSE.md).
