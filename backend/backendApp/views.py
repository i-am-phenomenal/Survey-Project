from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
import psycopg2
from backendApp import utils
import json 

@csrf_exempt
def saveInformation(request): 
    decoded = request.body.decode("utf-8")
    converted = json.loads(decoded)
    print(converted)
    # coverted = converted.pop("dataStorage")
    connection = utils.getConnectionObject()
    cursor = connection.cursor()
    try:
        queryString = "INSERT INTO backendApp_information " + utils.getInformationColumns(converted.keys()) + " VALUES " + utils.getPercentageTuple()
        print(len(converted.values))
        cursor.execute(
            queryString,
            tuple(converted.values())
        )
        print("SUCCESS !!!")
    except Exception as e:
        print(e)
    cursor.close()

    return JsonResponse("RESPONSE STRING ", safe=False)