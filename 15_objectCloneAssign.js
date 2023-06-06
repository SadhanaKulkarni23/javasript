 console.log(
    "**************************** 1] Shallow clone Array Is :-->******************************************************"
  );
  const arrayNums = [20, 3, 4, 56, 90, 400, 49];
  const clonedArray = arrayNums;
  console.log("Given Array Is :-->", arrayNums);
  console.log("After Shallow Cloned Array Is:-->", clonedArray);
  console.log(
    "******************************* 1] Updating  cloned array Is :-->*******************************************************"
  );
  clonedArray.push(55, 66);
  console.log("The Updated Cloned Array Is:-->", arrayNums);
  console.log("The Updated Cloned Array Is:-->", clonedArray);
  
  console.log(
    "******************************** 2] Deep Clone :-->**************************************************************************"
  );
  const newArray = [...arrayNums];
  arrayNums.push(10, 25);
  console.log("Deep cloned array after Updating:-->", newArray);
  console.log("Deep cloned array after Updating:-->", arrayNums);
  console.log("---------------------------------------------------------------------------------------------------------------------");
  console.log(
    "***********************************3] Merge or Concat Array Is :--> *********************************************************************"
  );
  const arrayEven = [2, 30, 14, 8];
  const concatArray = [...arrayNums, ...arrayEven];
  console.log("Concating Array Is :-->", concatArray);
  console.log("");
  
  console.log(
    "**************************************4] Employee Info Object  :--> ***************************************************************"
  );
  const employee_info= {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
      july_month: "60,0000INR",
      aug_month: "40,0000INR",
      jun_month: "65,0000INR",
    },
    address: {
      locality: {
        colony: "New Modern Socity",
        street: "Thakarey Nagar, 411003",
      },
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
    MobileNo: ["+91 987451236", "1572-124536", "+91 - 9874512463"],
  };
  console.log(employee_info);
  console.log("");
  console.log(
    "************************************** 5] All Employee details Are:--> *****************************************************"
  );
  console.log("a.Address:", employee_info.address);
  console.log(employee_info.address);
  console.log("b. Mobile Numbers:", employee_info.mobiles);
  
  console.log(
    "**************************************6] Perform deep copy using JSON.stringfy:--> **************************************************"
  );
  const deepClonedInfo = JSON.parse(JSON.stringify(employee_info));
  
  employee_info.salary.july_month = "80,0000INR";
  console.log(
    " a)  Updated salary for July month Is :-->",
    employee_info.salary.july_month
  );
  console.log("--------------------------------------------------------------------------------------");
  employee_info.address.country = "United Kindom";
  console.log("  b) Updated country Is :-->", employee_info.address.country);
  console.log("----------------------------------------------------------------------------------------");
  console.log(
    "  c) Original salary Is:-->"
  );
  console.log(deepClonedInfo.salary);
  console.log(
    "Updated salary Is:-->"
  );
  console.log(employee_info.salary);
  console.log("---------------------------------------------------------------------------------------------");
  console.log(
    "Original Address Is:>>"
  );
  console.log(deepClonedInfo.address);
  console.log(
    "Updated Address Is-->"
  );
  console.log(employee_info.address);