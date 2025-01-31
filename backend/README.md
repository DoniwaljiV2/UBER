# User Registration Endpoint

## POST /users/register

### Description

This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body

The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

- **201 Created**

  - **Description**: User successfully registered.
  - **Body**: A JSON object containing the authentication token and user details.
  - **Example**:
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "_id": "user_id_here",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **400 Bad Request**

  - **Description**: Invalid input data.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **500 Internal Server Error**

  - **Description**: An error occurred while processing the request.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Failed to create user: error_message_here"
    }
    ```

# User Login Endpoint

## POST /users/login

### Description

This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body

The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

- **200 OK**

  - **Description**: User successfully logged in.
  - **Body**: A JSON object containing the authentication token and user details.
  - **Example**:
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "_id": "user_id_here",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **400 Bad Request**

  - **Description**: Invalid input data.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **401 Unauthorized**

  - **Description**: Invalid email or password.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

# User Profile Endpoint

## GET /users/profile

### Description

This endpoint is used to retrieve the profile of the currently authenticated user.

### Responses

- **200 OK**

  - **Description**: User profile retrieved successfully.
  - **Body**: A JSON object containing the user details.
  - **Example**:
    ```json
    {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- **401 Unauthorized**

  - **Description**: User is not authenticated.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**

  - **Description**: An error occurred while processing the request.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Failed to retrieve user profile: error_message_here"
    }
    ```

# User Logout Endpoint

## GET /users/logout

### Description

This endpoint is used to log out the currently authenticated user.

### Responses

- **200 OK**

  - **Description**: User successfully logged out.
  - **Body**: A JSON object containing a success message.
  - **Example**:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```

- **401 Unauthorized**

  - **Description**: User is not authenticated.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**

  - **Description**: An error occurred while processing the request.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "message": "Failed to log out user: error_message_here"
    }
    ```


# Caption Registration Endpoint

## POST /captions/register

### Description
This endpoint is used to register a new caption. It requires the caption's first name, last name, email, password, and vehicle details.

### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the caption. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the caption. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the caption. Must be a valid email format.
- `password` (string, required): The password for the caption. Must be at least 6 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.

Example:
```json
{
  "fullname": {
    "firstname": "test_caption_firstname",
    "lastname": "test_caption_lastname"
  },
  "email": "test_email@test.com",
  "password": "test_caption",
  "vehicle": {
    "color": "red",
    "plate": "MP 04 XY 3456",
    "capacity": 3,
    "vehicleType": "car"
  }
}

### Responses

- **201 Created**

  - **Description**: Caption successfully registered.
  - **Body**: ### Responses

- **201 Created**

  - **Description**: User successfully registered.
  - **Body**: A JSON object containing the authentication token and user details.
  - **Example**:
     ```json 
     { "token": "jwt_token_here",
      "caption": {
         "_id": "caption_id_here",
          "fullname": {
             "firstname": "test_caption_firstname", "lastname": "test_caption_lastname"
              },
            "email": "test_email@test.com",
             "vehicle": {
                 "color": "red",
                  "plate": "MP 04 XY 3456", 
                  "capacity": 3,
                  "vehicleType": "car"
                    } 
                  }
      }


### **400 Bad Request**
- **Description**: Invalid input data.
- **Body**: A JSON object containing the validation errors.

#### **Example**:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid Vehicle Type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}



### **500 Internal Server Error**
- **Description**: An error occurred while processing the request.
- **Body**: A JSON object containing the error message.

#### **Example**:
```json
{
  "message": "Failed to create caption: error_message_here"
}

# Caption Login Endpoint

## POST /captions/login

### Description
This endpoint is used to log in an existing caption. It requires the caption's email and password.

### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the caption. Must be a valid email format.
- `password` (string, required): The password for the caption. Must be at least 6 characters long.

Example:
```json
{
  "email": "test_email@test.com",
  "password": "test_caption"
}

### Responses

- **200 OK**

  - **Description**:  Caption successfully logged in.
  - **Body**:  A JSON object containing the authentication token and caption details.
  - **Example**:
    ```json
    {
  "token": "jwt_token_here",
  "caption": {
    "_id": "caption_id_here",
    "fullname": {
      "firstname": "test_caption_firstname",
      "lastname": "test_caption_lastname"
    },
    "email": "test_email@test.com",
    "vehicle": {
      "color": "red",
      "plate": "MP 04 XY 3456",
      "capacity": 3,
      "vehicleType": "car"
    }
  }
}
    ```


    
- **400 Bad Request**

  - **Description**:   Invalid input data.
  - **Body**:  A JSON object containing the authentication token and caption details.
  - **Example**:
    ```json
    {
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
    ```


    - **500 Internal Server Error**

  - **Description**:    An error occurred while processing the request.
  - **Body**:   A JSON object containing the error message.
  - **Example**:
    ```json
  {
  "message": "Failed to log in caption: error_message_here"
  }
    ```