from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
import psycopg2
from backendApp import utils
import json 
from string import Template

@csrf_exempt
def saveInformation(request): 
    decoded = request.body.decode("utf-8")
    converted = json.loads(decoded)
    # converted["pageOn"] = converted["pageon"]
    # del converted["pageon"]
    # converted["sizeScreenHeight"] = 
    print(converted)
    connection = utils.getConnectionObject()
    cursor = connection.cursor()
    try:
        columnsTuple = utils.getInformationColumns(converted.keys())
        percentageTuple = utils.getPercentageTuple(converted.keys())
        query = Template(""" INSERT INTO "backendApp_information" $columnsTuple VALUES $percentageTuple""")
        query = query.substitute(
            columnsTuple=columnsTuple,
            percentageTuple=percentageTuple
        )
        # queryString = "INSERT INTO backendApp_information " + utils.getInformationColumns(converted.keys()) + " VALUES " + utils.getPercentageTuple(converted.keys())
        cursor.execute(
            query,
            tuple(converted.values())
        )
        print("SUCCESS !!!")
    except Exception as e:
        print(e)
    cursor.close()

    return JsonResponse("RESPONSE STRING ", safe=False)