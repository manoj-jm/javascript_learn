#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h> // Include the ctype.h header for ispunct

// Define the maximum length of a word
#define MAX_WORD_LENGTH 50

// Function to check if a word is in the dictionary
int isWordInDictionary(char *word, char **dictionary, int dictionarySize)
{
    for (int i = 0; i < dictionarySize; i++)
    {
        if (strcmp(word, dictionary[i]) == 0)
        {
            return 1; // Word found in the dictionary
        }
    }
    return 0; // Word not found in the dictionary
}

// Function to perform spell checking
void spellCheck(char *input, char **dictionary, int dictionarySize)
{
    char *token = strtok(input, " "); // Tokenize the input string

    while (token != NULL)
    {
        // Remove trailing punctuation (if any)
        int len = strlen(token);
        if (len > 0 && ispunct(token[len - 1]))
        {
            token[len - 1] = '\0';
        }

        // Convert the token to lowercase for case-insensitive comparison
        for (int i = 0; i < len; i++)
        {
            token[i] = tolower(token[i]);
        }

        // Check if the token is in the dictionary
        if (!isWordInDictionary(token, dictionary, dictionarySize))
        {
            printf("Spelling error: %s\n", token);
        }

        token = strtok(NULL, " "); // Get the next token
    }
}

int main()
{
    // Sample dictionary
    char *dictionary[] = {"hello","ballari" ,"world", "example", "spell", "checker", "how", "are", "you"};

    // Get input from the user
    printf("Enter a sentence: ");
    char input[MAX_WORD_LENGTH * 100];
    fgets(input, sizeof(input), stdin);

    // Perform spell checking
    spellCheck(input, dictionary, sizeof(dictionary) / sizeof(dictionary[0]));

    return 0;
}
