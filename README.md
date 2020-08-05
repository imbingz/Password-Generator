# Password-Generator
### Table of Content
[Project Context - User Story](#context)


<a id="context></a>
## Project Context - User Story
* Strong passwords are the first line of defense in protecting business data and customer information. However, most of us have trouble memorizing strong passwords filled with special symbols and random characters. Therefore, we often choose the same password for multiple personal and business accounts, or we create simpler ones that are easy to crack. 
* Employees who have access to high-sensitivity data might share their login information with others
* it is important for companies to implement a secure password policy such as generating strong random passwords that provides greater security.




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
After the 'click' event, the users will be prompted to enter the password length. So create a variable that holds the users input. 
#### Step 2
Check if the users input is a number between 8 and 128. If not(such as letters, null, space, symbols, or numbers out of range), keep prompting until the input is as desired. 
#### Step 3
Ask users whether they would like their passwords to contain numbers, uppercase letters, lowercase letters and symbols. Create a variable to hold each answer (yes=true; no=false). If users select no to all questions, then alert "They must select at least one", and iterate the set of questions again until at least one is chosen. 
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
