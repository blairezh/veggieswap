# Generated by Django 4.2.10 on 2024-09-15 05:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('veggieapp', '0002_remove_offer_post_delete_post'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('item', models.CharField(max_length=200)),
                ('item_description', models.CharField(max_length=200)),
                ('date_posted', models.DateTimeField(auto_now_add=True)),
                ('location', models.CharField(max_length=200)),
            ],
        ),
    ]
