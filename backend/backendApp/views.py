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
        cursor.execute(
            query,
            tuple(converted.values())
        )
        connection.commit()
        print("SUCCESS !!!")
    except Exception as e:
        print(e)
    cursor.close()
    connection.close()
    return JsonResponse("", safe=False)