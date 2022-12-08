import React from "react";
import NavBar from '../components/NavBar';

function Blogs(){

    return (
        <div className="align-items-center">
        <NavBar />
        <h1> Merge Software </h1>
        <p>
            Merge Sort is the best algorithm I've learned and it works best even with a large Data set. Efficiency is O(logn).
            As with other code, seperate comparison from set. Start with recursive base, check if array is array. If array is less than or equal to 1, return the array. Otherwise, split arrray in half. Perform recursion on the left half to sort and store in left half variable. DO the same with the right then merge left and right.
            Next, use merge function to create an empty array to store answer. Set up left and right pointers to zero. WHile left and right less than respective lengths, compare numbers and index zero less than or equal to 0, lower number gets pushed to our array and corresponding array(pointers) gets incremented by 1. Proceed until pointers exceed length of array. Remaining elements are concatenated with array. 
        </p>
        </div>
    );
}

export default Blogs;