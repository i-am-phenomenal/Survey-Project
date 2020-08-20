from django.db import models

class Information(models.Model): 
    browserEngine = models.CharField(max_length=100, null=True)
    browserLanguage = models.CharField(max_length=100, null=True)
    browserName = models.CharField(max_length=100, null=True)
    browserOnline = models.CharField(max_length=100, null=True)
    browserPlatform = models.CharField(max_length=100, null=True)
    browserVersion1a = models.CharField(max_length=500, null=True)
    browserVersion1b = models.CharField(max_length=500, null=True)
    dataCookies1 = models.CharField(max_length=200, null=True)
    dataCookies2 = models.CharField(max_length=200, null=True)
    dataCookiesEnabled = models.CharField(max_length=100, null=True)
    longitude = models.CharField(max_length=100, null=True)
    latitude = models.CharField(max_length=100, null=True)
    ipAddress1 = models.CharField(max_length=100, null=True)
    ipAddress2 = models.CharField(max_length=100, null=True)
    javaEnabled = models.CharField(max_length=100, null=True)
    pageOn = models.CharField(max_length=100, null=True)
    previousSites = models.CharField(max_length=100, null=True)
    referrer = models.CharField(max_length=100, null=True)
    screenColorDepth = models.CharField(max_length=10, null=True)
    screenPixelDepth = models.CharField(max_length=10, null=True)
    sizeAvailHeight = models.CharField(max_length=10, null=True)
    sizeAvailWidth = models.CharField(max_length=10, null=True)
    sizeDocumentHeight = models.CharField(max_length=10, default="", null=True)
    sizeDocumentWidth = models.CharField(max_length=10, default="", null=True)
    sizeIn = models.CharField(max_length=10, null=True)
    sizeInHeight = models.CharField(max_length=10, null=True)
    sizeScreenHeight = models.CharField(max_length=10, null=True)
    sizeScreenWidth = models.CharField(max_length=10, null=True)
    timeOpened = models.CharField(max_length=100, null=True)
    timestamp = models.CharField(max_length=20, null=True)




