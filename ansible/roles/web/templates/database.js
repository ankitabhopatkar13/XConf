{% for instance in instance_facts_db.instances %}
{% set db_ip = instance.public_ip_address %}
module.exports = {
    remoteUrl : 'mongodb://node:nodeuser@{{db_ip}}:27017/uwO3mypu',
    localUrl: 'mongodb://node:nodeuser@{{db_ip}}:27017/uwO3mypu'
};
{% endfor %}