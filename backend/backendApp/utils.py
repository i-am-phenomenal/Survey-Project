import psycopg2
import os 

USER = ""
PASSWORD = ""
DATABASE_NAME = ""
COLUMNS =  (
        "browserEngine",
        "browserLanguage",
        "browserName",
        "browserOnline", 
        "browserPlatform",
        "browserVersion1a",
        "browserVersion1b",
        "dataCookies1",
        "dataCookies2",
        "dataCookiesEnabled",
        "longitude",
        "latitude",
        "ipAddress1",
        "ipAddress2",
        "javaEnabled",
        "pageOn",
        "previousSites",
        "referrer",
        "screenColorDepth",
        "screenPixelDepth",
        "sizeAvailHeight",
        "sizeAvailWidth",
        "sizeDocumentHeight",
        "sizeDocumentWidth",
        "sizeIn",
        "sizeInHeight", 
        "sizeScreenHeight",
        "sizeScreenWidth",
        "timeOpened",
        "timestamp"
    )

def removeNewLineAndTrim(value): 
    if '\n' in value: 
        return value.split("\n")[0].strip()
    else: 
        return value.strip()

def readAndFormatCreds(): 
    global USER, PASSWORD, DATABASE_NAME
    with open(os.getcwd() + "\creds.txt") as file: 
        USER, PASSWORD, DATABASE_NAME = file.readlines()
        USER = removeNewLineAndTrim(USER)
        PASSWORD = removeNewLineAndTrim(PASSWORD)
        DATABASE_NAME = removeNewLineAndTrim(DATABASE_NAME)
        
def getConnectionObject(): 
    global USER, PASSWORD, DATABASE_NAME
    readAndFormatCreds()
    connection = psycopg2.connect(
        host= "localhost",
        port = "5432",
        user = USER,
        password = PASSWORD,
        database = DATABASE_NAME
    )
    return connection

"""
    For some reason, we need to enclose the column names inside dobule quotes at the time of query.
"""
def getInformationColumns(columns): 
    valString = "("
    for columnName in columns:
        valString = valString + f'"'
        valString = valString + columnName
        valString = valString + f'"'
        valString = valString + ","
    if valString[len(valString) - 1] == ",": 
        valString = valString[0:len(valString)-1]
        valString = valString + ")"
    return valString


def getPercentageTuple(columns): 
    valString = "("
    for iter in range(len(columns)):
        valString = valString + "%s"
        valString = valString + ","
    if valString[len(valString) - 1] == ",": 
        valString = valString[0:len(valString)-1]
        valString = valString + ")"
    return valString
