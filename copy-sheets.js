function onOpen()
{

  // clear the cells you are copying to
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = sheet.getRange("B8:DC120");
  range.clear();
  
  // set the next destination range to be where your first cell number will be copied too
  var nextDestinationRange = 8;
  
  function copyToMaster(nextDestinationRange, sourceSheetNumber)
  {
  
    // switch to the sheet we are copying from
    var sourceSheet = SpreadsheetApp.getActiveSpreadsheet();
    SpreadsheetApp.setActiveSheet(sourceSheet.getSheets()[sourceSheetNumber]);
    
    // get all the values from column B, even the empty ones
    var columnValues = sourceSheet.getRange("B1:B").getValues();
    // get the length of the column values so we have a number to work with
    var columnLength = columnValues.length;
    
    // setup vars for the text part of the destination range
    var destinationRangeFirstCellPart = "B";
    var destinationRangeSecondCellPart = ":BB";
    
    // add the number of inv rows to the destination range
    var destinationRangeMath = nextDestinationRange + numberOfRows;
    
    // convert what we need in the range to strings ** maybe make this it's own var so as to not mess with the number type
    nextDestinationRange.toString();    
    numberOfRows.toString();
    destinationRangeMath.toString();
    
    // complete the source range string
    var sourceRange = "B8:BB";
    sourceRange += numberOfRows;
    
    // complete the destination range string
    var destinationRange = destinationRangeFirstCellPart;
    destinationRange += nextDestinationRange;
    destinationRange += destinationRangeSecondCellPart;
    destinationRange += destinationRangeMath;
    
    // get the data from the source sheet
    var sourceData = sourceSheet.getRange(sourceRange);
    
    // switch to the master sheet
    var masterSheet = SpreadsheetApp.getActiveSpreadsheet();
    SpreadsheetApp.setActiveSheet(masterSheet.getSheets()[0]);
    
    // copy the source data to the master sheet
    sourceData.copyTo(masterSheet.getRange(destinationRange));
    
    // switch the destinationRangeMath back to an int
    parseInt(destinationRangeMath);
    // add 1 to the number of rows for the start of the next copy
    nextDestinationRange = (destinationRangeMath + 1) - 8;
    
    return nextDestinationRange;
  
  }

  var nextDestinationRange = copyToMaster(nextDestinationRange, 1);
  var nextDestinationRange = copyToMaster(nextDestinationRange, 2);
  var nextDestinationRange = copyToMaster(nextDestinationRange, 3);
  var nextDestinationRange = copyToMaster(nextDestinationRange, 4);
  var nextDestinationRange = copyToMaster(nextDestinationRange, 5);

}
