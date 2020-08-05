# Password-Generator

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```




### 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

### Links 
#### Link to Website

https://imbingz.github.io/Password-Generator/

#### Link to Files 
https://github.com/imbingz/Password-Generator/


### Pseudocodes 
#### Step 1
After the 'click' event, the users will be prompted to enter the password length. So create a variable that will hold the users input. 
#### Step 2
Check if the users input is a number between 8 and 128. If not(such as letters, null, space, symbols, or numbers out of range), keep prompting until the input is as desired. 
#### Step 3
Ask users whether they would like their passwords to contain numbers, uppercase letters, lowercase letters and symbols. Create a variable to hold each answer (yes=true; no=false). 
#### Step 4
Create a variable that holds the sum of user preference (if yes to any of the options, add those characters to the variable)
#### Step 5
Generate random numbers as index to choose the character randomly. 
#### Step 6
Run the step 5 for the number of times, same as the password length input by the users 
#### Step 7
Create a variable that holds the sum of those random characters. 
#### Step 8
Add the above to the function generatePassword ()


### Credits

[Password Special characters](https://owasp.org/www-community/password-special-characters)

[Random password generator](https://en.wikipedia.org/wiki/Random_password_generator)

[How To Create A Strong Password](https://www.pcmag.com/how-to/how-to-create-a-random-password-generator)
