from django.db import models

class Information(models.Model): 
    browserEngine = models.CharField(max_length=100)
    browserLanguage = models.CharField(max_length=100)
    browserName = models.CharField(max_length=100)
    browserOnline = models.CharField(max_length=100)
    browserPlatform = models.CharField(max_length=100)
    browserVersion1a = models.CharField(max_length=500)
    browserVersion1b = models.CharField(max_length=500)
    dataCookies1 = models.CharField(max_length=200)
    dataCookies2 = models.CharField(max_length=200)
    dataCookiesEnabled = models.CharField(max_length=100)
    longitude = models.CharField(max_length=100)
    latitude = models.CharField(max_length=100)
    ipAddress1 = models.CharField(max_length=100)
    ipAddress2 = models.CharField(max_length=100)
    javaEnabled = models.CharField(max_length=100)
    pageOn = models.CharField(max_length=100)
    previousSites = models.CharField(max_length=100)
    referrer = models.CharField(max_length=100)
    screenColorDepth = models.CharField(max_length=10)
    screenPixelDepth = models.CharField(max_length=10)
    sizeAvailHeight = models.CharField(max_length=10)
    sizeAvailWidth = models.CharField(max_length=10)
    sizeDocumentHeight = models.CharField(max_length=10, null=True)
    sizeDocumentWidth = models.CharField(max_length=10, null=True)
    sizeIn = models.CharField(max_length=10)
    sizeInHeight = models.CharField(max_length=10)
    sizeScreenHeight = models.CharField(max_length=10)
    sizeScreenWidth = models.CharField(max_length=10)
    timeOpened = models.CharField(max_length=100)
    timestamp = models.CharField(max_length=20)




