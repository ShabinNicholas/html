class Solution {
    encode(strs) {
        let encoded = "";

        for (const str of strs) {
            encoded += str.length + "#" + str;
        }

        return encoded;
    }

    decode(s) {
        const result = [];
        let i = 0;

        while (i < s.length) {
            // Find the # that separates length and string
            let j = i;

            while (s[j] !== "#") {
                j++;
            }

            // Get the length
            const length = Number(s.slice(i, j));

            // Move past #
            i = j + 1;

            // Extract the string using its length
            result.push(s.slice(i, i + length));

            // Move to the next encoded string
            i = i + length;
        }

        return result;
    }
}

let a = new Solution()

let b = a.encode(["Hello", "World"])
let c = a.decode(b)
console.log(c);
