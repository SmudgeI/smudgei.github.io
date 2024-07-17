        var P1 = PASS01 + (PASS07 * PASS13) / PASS03 - PASS09 - (PASS14 * 0) / PASS05;

        var P2 = PASS10 - PASS02 + PASS09 * PASS04 - PASS15 + PASS07 + PASS05 / PASS11 * PASS01 + PASS03 * PASS06 / PASS14 - P1 * PASS12;

        var P3 = PASS09 * PASS02 - PASS10 + PASS05 / PASS14 - PASS03 + P1 / PASS11 * PASS04 + PASS15 - PASS01 * PASS07 / PASS06 + PASS12 * PASS13 + PASS01 / PASS05 - PASS14 * PASS09 + PASS03 * PASS07;

        var PASS = P1 + P2 + P3;

        var url = document.querySelector("a");

        var ALERT = 0;

        var BRUTEFORCE = 0;
