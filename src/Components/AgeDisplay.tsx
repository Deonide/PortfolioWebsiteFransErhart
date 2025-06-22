import React from "react";

function calculateAge(birthdate: string): number {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

export default function AgeCalculator() {
    const styles = {
        color: "#E9A944",
    };
    return <h1 style={styles}>{calculateAge("1997-09-27")}</h1>;
}
