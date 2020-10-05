# Caesar-cipher
CLI tool should accept 4 options (short alias and full name):

-s, --shift: a shift
-i, --input: an input file
-o, --output: an output file
-a, --action: an action encode/decode

Action (encode/decode) and the shift are required, if one of them missed - an error should be shown, the process should exit with non-zero status code.
If the input file is missed - use stdin as an input source.
If the output file is missed - use stdout as an output destination.
If the input and/or output file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) - human-friendly error should be printed in stderr.
If passed params are fine the output (file or stdout) should contain encoded/decoded content of input (file or stdin).
For encoding/decoding use only the English alphabet, all other characters should be kept untouched.

Usage example:

$ node .\caesar-cipher-cli\index.js -a encode -s 7 -i ".\caesar-cipher-cli\input.txt" -o ".\caesar-cipher-cli\output.txt"
$ node .\caesar-cipher-cli\index.js --action encode --shift 7 --input plain.txt --output encoded.txt
$ node .\caesar-cipher-cli\index.js --action decode --shift 7 --input decoded.txt --output plain.txt

>input.txt 
>`This is secret. Message about "_" symbol!`

>output.txt 
>`Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`