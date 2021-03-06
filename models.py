from pymodm import fields, MongoModel


class User(MongoModel):
    email = fields.EmailField(primary_key=True)
    picture = fields.ListField()
    process_requested = fields.ListField()
    upload_time = fields.ListField(field=fields.DateTimeField())
    image_size = fields.ListField(blank=True)
    process_duration = fields.ListField(blank=True)
    processed_image_name = fields.ListField(blank=True)
    processed_image_string = fields.ListField(blank=True)
    conversion_flag = fields.ListField(blank=True)
    histograms_original = fields.ListField(blank=True)
    histograms_processed = fields.ListField(blank=True)
    pass
